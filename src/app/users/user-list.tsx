import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";
import { fetchFilteredUsers } from "../lib/data";

export default async function UserList({ query }: { query: string }) {
  const users = await fetchFilteredUsers(query);

  return (
    <div className="flex flex-col py-4 gap-4">
      {users.map(user => {
        return (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="grid grid-rows-4 grid-cols-2 md:grid-rows-3 md:grid-cols-[40%_20%_40%] overflow-hidden items-center p-2 gap-0 md:gap-4 rounded-md border-1 border-l-6 border-darker-bg hover:border-accent"
          >
            <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-3 text-lg md:text-xl flex items-center gap-3">
              <UserIcon className="shrink-0 h-6 md:h-10" />
              <p>{user.name}</p>
            </div>
            <div className="font-bold">Email</div>
            <div className="overflow-hidden">{user.email}</div>
            <div className="font-bold">Phone Number</div>
            <div className="overflow-hidden">{user.phone}</div>
            <div className="font-bold">Subscriptions</div>
            <div className="overflow-hidden">{user.subscription_count}</div>
          </Link>
        )
      })}
    </div>
  )
}