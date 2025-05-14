'use client';

import { NavigationSection } from './NavigationSection';
import { useEffect, useState } from 'react';
import { client } from '../../lib/sanity';
import { worksQuery } from '../../lib/queries';
import { Work } from '../../types/sanity';
import { NavigationItem } from './NavigationItem';
import { usePathname } from 'next/navigation';
import { HamburgerIcon, CloseIcon } from '../../icons';
import { useAtom } from 'jotai';
import { isMobileMenuOpenAtom } from '../../state/navigationState';

export function Navigation() {
  const [works, setWorks] = useState<Work[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useAtom(isMobileMenuOpenAtom);
  const pathname = usePathname();

  useEffect(() => {
    const fetchWorks = async () => {
      const fetchedWorks = await client.fetch<Work[]>(worksQuery);
      setWorks(fetchedWorks);
    };

    fetchWorks();
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {isMobileMenuOpen ? (
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed top-4 right-4 z-50 p-2 text-[var(--foreground)] focus:outline-none md:hidden"
          aria-label="Close navigation menu"
        >
          <CloseIcon />
        </button>
      ) : (
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="fixed top-4 right-4 z-50 p-2 text-[var(--foreground)] focus:outline-none md:hidden"
          aria-label="Open navigation menu"
        >
          <HamburgerIcon />
        </button>
      )}
      <nav
        className={` ${
          isMobileMenuOpen
            ? 'fixed inset-0 z-40 mt-2 flex h-[200dvh] w-dvw flex-col overflow-hidden bg-[var(--background)] p-4'
            : 'hidden'
        } text-base select-none md:relative md:inset-auto md:flex md:w-80 md:flex-col md:overflow-y-visible md:bg-transparent md:p-0`}
      >
        <NavigationItem href="/" title="Home" isActive={pathname === '/'} />
        <NavigationSection title="Work">
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
        </NavigationSection>
      </nav>
    </>
  );
}
