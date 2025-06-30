import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-semibold">Placeholder</h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link href="/about">About me</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
