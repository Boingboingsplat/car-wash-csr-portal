import { alegreya } from "@/app/ui/fonts";
import Search from "@/app/users/search";
import UserList from "@/app/users/user-list";

export default async function Users(props: {
  searchParams?: Promise<{
    query?: string;
  }>
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  
  return (
    <main className="mx-auto max-w-[50vw]">
      <h1 className={`${alegreya.className} text-2xl mb-8`}>Users</h1>
      <Search placeholder="Search users" />
      <UserList query={query} />
    </main>
  );
}
