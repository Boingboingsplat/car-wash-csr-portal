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
            className="grid grid-rows-3 grid-cols-3 items-center p-2 gap-4 rounded-md border-1 border-l-6 border-darker-bg hover:border-accent"
          >
            <div className="row-span-3 text-xl flex items-center gap-3">
              <UserIcon className="shrink-0 h-10" />
              <p>{user.name}</p>
            </div>
            <div className="font-bold">Email</div>
            <div className="overflow-hidden">{user.email}</div>
            <div className="font-bold">Phone Number</div>
            <div className="overflow-hidden">{user.phone}</div>
            <div className="font-bold">Active Subscriptions</div>
            <div className="overflow-hidden">{user.subscription_count}</div>
          </Link>
        )
      })}
    </div>
  )
}