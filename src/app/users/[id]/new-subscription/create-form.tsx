'use client';

import { createSubscription } from "@/app/lib/actions";
import { User } from "@/app/lib/definitions";
import Button from "@/app/ui/button";

export default function CreateSubscriptionForm({ user }: { user: User }) {
  const createSubscriptionWithId = createSubscription.bind(null, user.id);

  return (
    <form
      action={createSubscriptionWithId}
      className="min-w-[500px]"
    >
        {/* Make / Model */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-4 font-bold">
            Make / Model
          </label>
          <input
            id="make_model"
            name="make_model"
            placeholder="Enter a make and model"
            required
            className="w-full rounded-md border border-lighter-bg p-2 placeholder:text-darker-bg"
          />
        </div>
        {/* License Plate */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-4 font-bold">
            License Plate
          </label>
          <input
            id="license"
            name="license"
            placeholder="Enter a license plate number"
            required
            className="w-full rounded-md border border-lighter-bg p-2 placeholder:text-darker-bg"
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Button iconType="none" label="Cancel" href={`/users/${user.id}`} />
          <button
            type="submit"
            className="flex w-max h-max p-2 gap-2 items-center rounded-lg font-bold bg-emerald-500 text-white hover:bg-accent hover:text-white"
          >
            Create
          </button>
        </div>
    </form>
  )
}