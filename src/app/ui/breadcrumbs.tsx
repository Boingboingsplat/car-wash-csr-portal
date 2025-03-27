import clsx from "clsx";
import { alegreya } from "./fonts";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <ol className={clsx(alegreya.className, 'flex text-xl md:text-2xl mb-6')}>
      {breadcrumbs.map((breadcrumb, index) => (
        <li
          key={breadcrumb.href}
          aria-current={breadcrumb.active}
          className={clsx(
            breadcrumb.active ? 'text-black' : 'text-darker-bg',
          )}
        >
          <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
          {index < breadcrumbs.length - 1 ? (
            <span className="mx-3 inline-block">/</span>
          ) : null}
        </li>
      ))}
    </ol>
  )
}