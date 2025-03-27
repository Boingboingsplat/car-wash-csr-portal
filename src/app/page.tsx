import LatestPurchases from "./latest-purchases";
import { getHomeCardData } from "./lib/data";
import Breadcrumbs from "./ui/breadcrumbs";
import { alegreya } from "./ui/fonts";

export default async function Home() {
  const { total_users, total_subscriptions, total_purchases } = await getHomeCardData();

  return (
    <main className="mx-auto w-max">
      {/* Header */}
      <Breadcrumbs 
        breadcrumbs={[
          { label: 'Home', href: '/', active: true },
        ]}
      />
      <div className="w-max grid grid-cols-3 gap-8 place-items-center">
        {/* Cards */}
        <div className="flex flex-col gap-1 justify-center items-center text-center text-xl w-32 h-32 border-1 border-darker-bg rounded-md">
          <div className={`${alegreya.className}`}>Total Users</div>
          <div>{ total_users }</div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center text-center text-xl w-32 h-32 border-1 border-darker-bg rounded-md">
          <div className={`${alegreya.className}`}>Active Subscriptions</div>
          <div></div>{ total_subscriptions }
        </div>
        <div className="flex flex-col gap-1 justify-center items-center text-center text-xl w-32 h-32 border-1 border-darker-bg rounded-md">
          <div className={`${alegreya.className}`}>Total Purchases</div>
          <div>{ total_purchases }</div>
        </div>
        {/* Latest Purchase list */}
        <div className="min-w-[450px] w-[50vw] p-4 col-span-3 border-1 border-darker-bg rounded-md">
          <h2 className={`${alegreya.className} text-xl col-div-2 mb-4`}>Recent Purchases</h2>
          <LatestPurchases />
        </div>
      </div>
    </main>
  );
}
