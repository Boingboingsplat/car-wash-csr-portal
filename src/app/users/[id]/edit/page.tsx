import { fetchUser } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { notFound } from "next/navigation";
import EditUserForm from "./edit-form";

export default async function addSubscription(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const user = await fetchUser(id);

  // 404 if user could not be found matching ID
  if (!user) {
    notFound();
  }

  return (
    <main className="md:mx-auto md:w-max">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/users' },
          { label: user.name, href: `/users/${user.id}` },
          { label: 'Edit User Info', href: `/users/${user.id}/edit`, active: true }
        ]}
      />
      <EditUserForm user={user} />
    </main>
  );
}