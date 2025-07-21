"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routes } from '@/constants/routes';

export default function NavDesktop() {
  const pathname = usePathname();
  return (
    <nav className="container flex gap-8">
      {routes.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              pathname === link.path && "text-accent border-b-2 border-accent"
            } font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
