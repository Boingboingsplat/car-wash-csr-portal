import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";

export default async function UserList({
  query,
  currentPage,
}: {
  query: string,
  currentPage: number,
}) {
  // TODO: query database for users
  const users = [
    { "id": "1", "name": "Alexander Alwardt", "email": "alexanderalwardt@gmail.com", "phone": "586-260-1300", "subscriptions": 1 },
    { "id": "2", "name": "Connor Donovan", "email": "connor@donovan.com", "phone": "555-123-4567", "subscriptions": 0 },
    { "id": "3", "name": "Norm Alperson", "email": "norm@alperson.com", "phone": "555-594-2142", "subscriptions": 2 },
  ];

  return (
    <div className="flex flex-col py-4 gap-4">
      {users.map(user => {
        return (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="grid grid-rows-3 grid-cols-3 items-center p-2 gap-4 rounded-md border-1 border-l-6 border-darker-bg hover:border-accent"
          >
            {/* TODO: User icon */}
            <div className="row-span-3 text-xl flex items-center gap-3">
              <UserIcon className="shrink-0 h-10" />
              <p>{user.name}</p>
            </div>
            <div className="font-bold">Email</div>
            <div className="overflow-hidden">{user.email}</div>
            <div className="font-bold">Phone Number</div>
            <div className="overflow-hidden">{user.phone}</div>
            <div className="font-bold">Active Subscriptions</div>
            <div className="overflow-hidden">{user.subscriptions}</div>
          </Link>
        )
      })}
    </div>
  )
}