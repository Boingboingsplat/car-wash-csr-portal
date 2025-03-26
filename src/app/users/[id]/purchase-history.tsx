import { formatCurrency } from "@/app/lib/utils";

export default async function PurchaseHistory({
  userId,
  currentPage,
}: {
  userId: string,
  currentPage: number,
}) {
  // TODO: query database for vehicle from user id
  const purchases: { id: string, type: "single" | "subscription", status: "paid" | "failed", amount: number, date: string }[] = [
    { id: "1", type: "single", status: "paid", amount: 500, date: "2023-05-26" },
    { id: "2", type: "subscription", status: "failed", amount: 1500, date: "2023-05-24" },
    { id: "3", type: "subscription", status: "failed", amount: 1500, date: "2023-05-24" },
    { id: "4", type: "subscription", status: "paid", amount: 1500, date: "2023-05-01" },
  ];
  const typeStringMap = {
    single: "Single Car Wash",
    subscription: "Subscription Payment",
  }

  return (
    <table className="w-full border-spacing-10">
      <thead className="font-bold">
        <tr>
          <td scope="col">Type</td>
          <td scope="col">Date</td>
          <td scope="col">Amount</td>
          <td scope="col">Status</td>
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
              <td>{typeStringMap[purchase.type]}</td>
              <td>{purchase.date}</td>
              <td>{formatCurrency(purchase.amount)}</td>
              <td>{statusCard}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}