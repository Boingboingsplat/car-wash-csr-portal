'use client';

import { editUser } from "@/app/lib/actions";
import { User } from "@/app/lib/definitions";
import Button from "@/app/ui/button";

export default function EditUserForm({ user }: { user: User }) {
  const editUserWithId = editUser.bind(null, user.id);

  return (
    <form
      action={editUserWithId}
      className="min-w-[500px]"
    >
        {/* User name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-4 font-bold">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Enter a name"
            defaultValue={user.name}
            className="w-full rounded-md border border-lighter-bg p-2 placeholder:text-darker-bg"
          />
        </div>
        {/* User email */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-4 font-bold">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            placeholder="Enter an email address"
            defaultValue={user.email}
            className="w-full rounded-md border border-lighter-bg p-2 placeholder:text-darker-bg"
          />
        </div>
        {/* User phone number */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-4 font-bold">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="Enter a phone number"
            defaultValue={user.phone}
            className="w-full rounded-md border border-lighter-bg p-2 placeholder:text-darker-bg"
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Button iconType="none" label="Cancel" href={`/users/${user.id}`} />
          <button
            type="submit"
            className="flex w-max h-max p-2 gap-2 items-center rounded-lg font-bold bg-emerald-500 text-white hover:bg-accent hover:text-white"
          >
            Update
          </button>
        </div>
    </form>
  )
}