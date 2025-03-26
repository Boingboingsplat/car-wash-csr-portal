import Button from "@/app/ui/button";

export default async function VehicleList({
  userId,
}: {
  userId: string,
}) {
  // TODO: query database for subscriptions
  const subscriptions = [
    { "id": "1", "status": "active", "mmy": "Ford Focus 2010", "license": "ABA1023" },
    { "id": "2", "status": "overdue", "mmy": "Ford Focus 2011", "license": "DYR4862" },
    { "id": "3", "status": "overdue", "mmy": "Ford Focus 2012", "license": "MOF6811" },
  ];

  return (
    <table className="w-full border-spacing-10">
      <thead className="font-bold">
        <tr>
          <td scope="col">Status</td>
          <td scope="col">Make / Model / Year</td>
          <td scope="col">Liscense Plate</td>
          <td scope="col">Edit</td>
          <td scope="col">Delete</td>
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
              <td>{subscription.mmy}</td>
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