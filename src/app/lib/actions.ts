'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
import { z } from 'zod';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

const SubscriptionScema = z.object({
  id: z.string(),
  user_id: z.string(),
  status: z.enum(['active', 'pending', 'overdue']),
  make_model: z.string(),
  license: z.string(),
});

const EditUser = UserSchema.omit({ id: true });
const CreateSubscription = SubscriptionScema.omit({ id: true, user_id: true, status: true });
const EditSubscription = SubscriptionScema.omit({ id: true, user_id: true, status: true });

export async function editUser(
  userId: string,
  formData: FormData
) {
  const { name, email, phone } = EditUser.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
  });
  
  await sql`
    UPDATE users
    SET name = ${name}, email = ${email}, phone = ${phone}
    WHERE id = ${userId}
  `;
 
  revalidatePath(`/users/${userId}`);
  redirect(`/users/${userId}`);
}

export async function createSubscription(
  userId: string,
  formData: FormData,
) {
  const { make_model, license } = CreateSubscription.parse({
    make_model: formData.get('make_model'),
    license: formData.get('license'),
  });
  // New subscriptions are always pending
  const status = 'pending';

  await sql`
    INSERT INTO subscriptions (user_id, status, make_model, license)
    VALUES(${userId}, ${status}, ${make_model}, ${license})
  `

  revalidatePath(`/users/${userId}`);
  redirect(`/users/${userId}`);
}

export async function editSubscription(
  subscriptionId: string,
  userId: string,
  formData: FormData
) {
  const { make_model, license } = EditSubscription.parse({
    make_model: formData.get('make_model'),
    license: formData.get('license'),
  });
  
  await sql`
    UPDATE subscriptions
    SET make_model = ${make_model}, license = ${license}
    WHERE id = ${subscriptionId}
  `;
 
  revalidatePath(`/users/${userId}`);
  redirect(`/users/${userId}`);
}

export async function deleteSubscription(
  userId: string,
  subscriptionId: string,
) {
  await sql`DELETE FROM subscriptions WHERE id = ${subscriptionId}`;
  revalidatePath(`/users/${userId}`);
}