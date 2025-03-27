import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const iconTypeMap = {
    'none': null,
    'edit': PencilIcon,
    'plus': PlusIcon,
    'trash': TrashIcon,
}

export default function Button({
    iconType,
    label,
    href,
}: {
    iconType: 'edit' | 'trash' | 'plus' | 'none', 
    label: string,
    href: string,
}) {
    const Icon = iconTypeMap[iconType];
    return (
        <Link
        href={href}
        className="flex w-max h-max p-2 gap-2 items-center rounded-lg font-bold bg-lighter-bg text-content-fg hover:bg-accent hover:text-white"
      >
        { Icon ? <Icon className="h-5" /> : null }
        { label ? <span>{label}</span> : null }
      </Link>
    )
}