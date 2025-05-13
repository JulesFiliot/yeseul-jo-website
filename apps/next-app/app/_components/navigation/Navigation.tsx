'use client';

import { NavigationDropDown } from './NavigationDropDown';
import { useEffect, useState } from 'react';
import { client } from '../../../lib/sanity';
import { worksQuery } from '../../../lib/queries';
import { Work } from '../../../lib/types';
import { NavigationItem } from './NavigationItem';
import { usePathname } from 'next/navigation';

// A simple hamburger icon component
const HamburgerIcon = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="fixed top-4 right-4 z-50 rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-inset md:hidden"
    aria-label="Open navigation menu"
  >
    <svg
      className="h-6 w-6"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
);

// A simple close icon component
const CloseIcon = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="fixed top-4 right-4 z-50 rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-inset md:hidden"
    aria-label="Close navigation menu"
  >
    <svg
      className="h-6 w-6"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
);

export function Navigation() {
  const [works, setWorks] = useState<Work[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchWorks = async () => {
      const fetchedWorks = await client.fetch<Work[]>(worksQuery);
      setWorks(fetchedWorks);
    };

    fetchWorks();
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {isMobileMenuOpen ? (
        <CloseIcon onClick={() => setIsMobileMenuOpen(false)} />
      ) : (
        <HamburgerIcon onClick={() => setIsMobileMenuOpen(true)} />
      )}
      <nav
        className={` ${
          isMobileMenuOpen
            ? 'fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#fff7ed] p-4'
            : 'hidden'
        } text-base select-none md:relative md:inset-auto md:flex md:w-80 md:flex-col md:overflow-y-visible md:bg-transparent md:p-0`}
      >
        <NavigationItem href="/" title="Home" isActive={pathname === '/'} />
        <NavigationDropDown
          isOpenDefault={true}
          isClosable={false}
          title="Work"
        >
          <>
            {works.map((work) => {
              const workHref = `/work/${work.slug.current}`;
              return (
                <NavigationItem
                  key={work._id}
                  href={workHref}
                  title={work.title}
                  isActive={pathname === workHref}
                />
              );
            })}
            {works.length === 0 && (
              <span className="text-gray-400">Loading...</span>
            )}
          </>
        </NavigationDropDown>
      </nav>
    </>
  );
}
