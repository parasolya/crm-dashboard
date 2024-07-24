export interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

const SidebarItem = ({
  pathname,
  src,
  alt,
  children,
}: SidebarItemProps) => {
  return (
    <li>
      <a href={pathname} className="flex items-center h-9 mx-1 gap-3.5">
        <img className="ml-5" width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-zinc-50">{children}</span>
      </a>
    </li>
  )
}

export default SidebarItem
