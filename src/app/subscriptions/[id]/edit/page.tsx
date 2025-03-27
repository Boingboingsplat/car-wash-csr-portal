import { fetchSubscription } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { notFound } from "next/navigation";
import EditSubscriptionForm from "./edit-form";

export default async function editUser(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const subscription = await fetchSubscription(id);
  console.log(subscription);

  // 404 if subscription could not be found matching ID
  if (!subscription) {
    notFound();
  }

  return (
    <main className="md:mx-auto md:w-max">
      <Breadcrumbs 
        breadcrumbs={[
          { label: 'Users', href: '/users' },
          { label: subscription.name, href: `/users/${subscription.user_id}`},
          { label: 'Edit Subscription', href: `/subscriptions/${id}/edit`, active: true}
        ]}
      />
      <EditSubscriptionForm subscription={subscription} />
    </main>
  );
}