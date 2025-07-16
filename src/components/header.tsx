import Link from 'next/link';

import NavDesktop from '@/components/nav-desktop';

export default function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">jay&apos;s site</h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <NavDesktop />
        </div>

        {/* mobile nav */}
        <div className="lg:hidden">{/* TODO: <NavMobile /> */}</div>
      </div>
    </header>
  );
}
