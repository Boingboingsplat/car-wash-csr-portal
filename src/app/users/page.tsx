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
    <main className="w-full md:mx-auto md:max-w-[600px]">
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
