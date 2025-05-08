import Link from 'next/link';
import Header from './components/Header';

export default function NotFound() {
  return (
    <main className="h-full">
      <div className="flex h-full flex-col items-center justify-center py-20">
        <h2 className="mb-6 text-3xl font-semibold">404 - Page Not Found</h2>
        <p className="mb-8">The page you are looking for does not exist.</p>
        <Link href="/" className="underline">
          Return to homepage
        </Link>
      </div>
    </main>
  );
}
