'use client';

import Link from 'next/link';
import { NavigationDropDown } from './NavigationDropDown';
import { useEffect, useState } from 'react';
import { client } from '../../../lib/sanity';
import { worksQuery } from '../../../lib/queries';
import { Work } from '../../../lib/types';
import { NavigationItem } from './NavigationItem';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [works, setWorks] = useState<Work[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchWorks = async () => {
      const fetchedWorks = await client.fetch<Work[]>(worksQuery);
      setWorks(fetchedWorks);
    };

    fetchWorks();
  }, []);

  return (
    <nav className="flex w-100 flex-col text-sm select-none">
      <NavigationItem href="/" title="Home" isActive={pathname === '/'} />
      <NavigationDropDown title="Work">
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
  );
}
