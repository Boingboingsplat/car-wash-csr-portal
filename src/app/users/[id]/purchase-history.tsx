import { fetchUserPurchases } from "@/app/lib/data";

export default async function PurchaseHistory({
  userId,
}: {
  userId: string,
}) {
  const purchases = await fetchUserPurchases(userId);

  return (
    <table className="w-full border-spacing-10">
      <thead className="font-bold">
        <tr className="text-left">
          <th scope="col">Type</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {purchases.map((purchase) => {
          const statusCard = 
            purchase.status === 'paid' ? (
              <div className="px-2 text-white w-max font-bold bg-emerald-600 rounded-full">Paid</div>
            ) : (
              <div className="px-2 text-white w-max font-bold bg-red-600 rounded-full">Failed</div>
            );

          return (
            <tr 
              key={purchase.id}
              className="h-12 border-b border-b-darker-bg last-of-type:border-none"
              >
              <td>{purchase.type}</td>
              <td>{purchase.date}</td>
              <td>{purchase.amount}</td>
              <td>{statusCard}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}