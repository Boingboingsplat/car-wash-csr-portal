
import { deleteSubscription } from "@/app/lib/actions";
import { fetchUserSubscriptions } from "@/app/lib/data";
import Button from "@/app/ui/button";
import { TrashIcon } from "@heroicons/react/24/solid";

export default async function SubscriptionList({
  userId,
}: {
  userId: string,
}) {
  const subscriptions = await fetchUserSubscriptions(userId);

  const DeleteButton = ({ subscriptionId }: { subscriptionId: string }) => {
    const deleteSubscriptionWithId = deleteSubscription.bind(null, userId, subscriptionId);
    return (
      <form action={deleteSubscriptionWithId}>
        <button
          type="submit"
          className="flex w-max h-max p-2 gap-2 items-center rounded-lg font-bold bg-lighter-bg text-content-fg hover:bg-accent hover:text-white"
        >
        <TrashIcon className="h-5" />
        </button>
      </form>
    );
  }

  // TODO: Special formatting for no subscriptions
  return (
    <table className="w-full border-spacing-10">
      <thead className="font-bold">
        <tr className="text-left">
          <th scope="col">Status</th>
          <th scope="col">Make / Model</th>
          <th scope="col">License Plate</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {subscriptions.map((subscription) => {
          const statusCardMap = {
            active: { color: 'bg-emerald-600', text: 'Active' },
            pending: { color: 'bg-stone-600', text: 'Pending' },
            overdue: { color: 'bg-red-600', text: 'Overdue' },
          };
          
          return (
            <tr 
              key={subscription.id}
              className="h-12 border-b border-b-darker-bg last-of-type:border-none"
            >
              <td>
                <div className={`px-2 text-white w-max font-bold ${statusCardMap[subscription.status].color} rounded-full`}>
                  {statusCardMap[subscription.status].text}
                </div>
              </td>
              <td>{subscription.make_model}</td>
              <td>{subscription.license}</td>
              <td><Button iconType="edit" label="" href={`/subscriptions/${subscription.id}/edit`}/></td>
              <td><DeleteButton subscriptionId={subscription.id} /></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}