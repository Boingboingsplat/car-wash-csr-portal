import { fetchUser } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { notFound } from "next/navigation";
import CreateSubscriptionForm from "./create-form";

export default async function editUser(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const user = await fetchUser(id);

  // 404 if user could not be found matching ID
  if (!user) {
    notFound();
  }

  return (
    <main className="md:mx-auto md:w-max">
      <Breadcrumbs 
        breadcrumbs={[
          { label: 'Users', href: '/users' },
          { label: user.name, href: `/users/${user.id}`},
          { label: 'New Subscription', href: `/users/${user.id}/new-subscription`, active: true}
        ]}
      />
      <CreateSubscriptionForm user={user} />
    </main>
  );
}