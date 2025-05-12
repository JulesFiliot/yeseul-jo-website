import { useState } from 'react';
import { NavigationItem } from './NavigationItem';

export function NavigationDropDown({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col select-none">
      <NavigationItem title={title} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <div className="flex flex-col pt-2 pl-5">{children}</div>}
    </div>
  );
}
