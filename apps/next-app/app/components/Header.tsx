import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-end pb-10 sm:pb-20">
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/work" className="hover:underline">
              Work
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
