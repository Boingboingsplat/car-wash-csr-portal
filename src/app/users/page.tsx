import { alegreya } from "@/app/ui/fonts";
import Search from "@/app/users/search";
import UserList from "@/app/users/user-list";

export default function Users() {
  return (
    <main className="mx-auto max-w-[50vw]">
      <h1 className={`${alegreya.className} text-2xl mb-8`}>Users</h1>
      <Search placeholder="Search users" />
      <UserList query="" currentPage={1} />
    </main>
  );
}