import { useState } from 'react';
import { NavigationItem } from './NavigationItem';

export function NavigationDropDown({
  children,
  title,
  isClosable = true,
  isOpenDefault = false,
}: {
  children: React.ReactNode;
  title: string;
  isClosable?: boolean;
  isOpenDefault?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="flex flex-col select-none">
      <NavigationItem
        title={title}
        onClick={() => {
          if (isClosable) {
            setIsOpen(!isOpen);
          }
        }}
        isHoverable={false}
      />
      {isOpen && (
        <div className="mt-[-4px] flex flex-col pt-0 pl-10">{children}</div>
      )}
    </div>
  );
}
