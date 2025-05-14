import { NavigationItem } from './NavigationItem';

export function NavigationSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col select-none">
      <NavigationItem title={title} isHoverable={false} />
      <div className="mt-[-4px] flex flex-col pt-0 pl-10">{children}</div>
    </div>
  );
}
