import { alegreya } from "@/app/ui/fonts";
import SubscriptionList from "./subscription-list";
import Button from "@/app/ui/button";
import PurchaseHistory from "./purchase-history";
import { fetchUser, fetchUserPurchases } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function User(props: { params: Promise<{ id: string }>}) {
  const params = await props.params;
  const id = params.id;
  const user = await fetchUser(id);


  // 404 if user could not be found matching ID
  if (!user) {
    notFound();
  }

  return (
    <main className="w-full">
      {/* Header */}
      <h1 className={`${alegreya.className} text-2xl mb-8`}>Users / {user.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* User Information */}
        <div className="p-4 border-darker-bg border-1 rounded-md">
          <h2 className={`${alegreya.className} text-xl col-span-2 mb-4`}>User Information</h2>
          <div className="grid grid-cols-[20%_auto] gap-4 justify-start mb-4">
            <div className="w-auto font-bold">Name</div>
            <div>{user.name}</div>
            <div className="w-auto font-bold">E-mail</div>
            <div>{user.email}</div>
            <div className="w-auto font-bold">Phone</div>
            <div>{user.phone}</div>
          </div>
          <Button iconType="edit" label="Edit User Info" href={`users/${user.id}/edit`}/>
        </div>
        {/* Vehicle Subscription Information */}
        <div className="p-4 border-darker-bg border-1 rounded-md">
          <h2 className={`${alegreya.className} text-xl col-span-2 mb-4`}>Vehicle Subscriptions</h2>
          <SubscriptionList userId={user.id} />
          <Button iconType="plus" label="New Subscription" href={`users/${user.id}/add-vehicle`}/>
        </div>
        {/* Purchase History */}
        <div className="p-4 border-darker-bg border-1 rounded-md">
          <h2 className={`${alegreya.className} text-xl col-span-2 mb-4`}>Purchase History</h2>
          <PurchaseHistory userId={user.id} />
        </div>
      </div>
    </main>
  );
}