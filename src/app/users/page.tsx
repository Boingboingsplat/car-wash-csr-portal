import Search from "@/app/users/search";
import UserList from "@/app/users/user-list";
import Breadcrumbs from "../ui/breadcrumbs";

export default async function Users(props: {
  searchParams?: Promise<{
    query?: string;
  }>
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  
  return (
    <main className="mx-auto min-w-[500px] max-w-[50vw]">
      <Breadcrumbs 
        breadcrumbs={[
          { label: 'Users', href: '/users', active: true },
        ]}
      />
      <Search placeholder="Search users" />
      <UserList query={query} />
    </main>
  );
}
