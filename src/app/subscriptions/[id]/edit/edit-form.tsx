'use client';

import { editSubscription } from "@/app/lib/actions";
import { Subscription } from "@/app/lib/definitions";
import Button from "@/app/ui/button";

export default function EditSubscriptionForm({ subscription }: { subscription: Subscription }) {
  const editSubscriptionWithId = editSubscription.bind(null, subscription.id, subscription.user_id);

  return (
    <form
      action={editSubscriptionWithId}
      className="md:min-w-[500px]"
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
            defaultValue={subscription.make_model}
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
            defaultValue={subscription.license}
            required
            className="w-full rounded-md border border-lighter-bg p-2 placeholder:text-darker-bg"
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Button iconType="none" label="Cancel" href={`/users/${subscription.user_id}`} />
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