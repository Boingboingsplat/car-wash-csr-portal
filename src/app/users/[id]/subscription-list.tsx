import { fetchUserSubscriptions } from "@/app/lib/data";
import Button from "@/app/ui/button";

export default async function VehicleList({
  userId,
}: {
  userId: string,
}) {
  const subscriptions = await fetchUserSubscriptions(userId);

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
          const statusCard = 
            subscription.status === 'active' ? (
              <div className="px-2 text-white w-max font-bold bg-emerald-600 rounded-full">Active</div>
            ) : (
              <div className="px-2 text-white w-max font-bold bg-red-600 rounded-full">Overdue</div>
            );
          
          return (
            <tr 
              key={subscription.id}
              className="h-12 border-b border-b-darker-bg last-of-type:border-none"
            >
              <td>{statusCard}</td>
              <td>{subscription.make_model}</td>
              <td>{subscription.license}</td>
              <td><Button iconType="edit" label="" href={`vehicle/${subscription.id}/edit`}/></td>
              <td><Button iconType="trash" label="" href={`vehicle/${subscription.id}/cancel`}/></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}