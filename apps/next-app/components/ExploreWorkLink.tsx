'use client';

import { useSetAtom } from 'jotai';
import { isMobileMenuOpenAtom } from '../state/navigationState';

export function ExploreWorkLink() {
  const setIsMobileMenuOpen = useSetAtom(isMobileMenuOpenAtom);

  const handleClick = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 text-base underline md:hidden"
    >
      Explore my work
    </button>
  );
}
