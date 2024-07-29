import { ReactComponent as ArrowRightIcon } from "../../assets/chevron-right.svg";

import styles from "./Sidebar.module.scss";
import { useLocation } from "react-router-dom";

interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
  isLastItem: boolean; 
}

const SidebarItem = ({
  pathname,
  src,
  alt,
  children,
  isLastItem
}: SidebarItemProps) => {

  const location = useLocation();
  const isActive = location.pathname === pathname;
  const isDefaultActive = pathname === '/customers';

  return (
    <li>
       <a
        href={pathname}
        className={`${styles.sidebarItem} ${isActive || isDefaultActive ? styles.active : ''}`}
      >
        <div className={styles.sidebarItemBox}>
        <img
          className={styles.sidebarImg}
          width={24}
          height={24}
          src={src}
          alt={alt}
        />
        <span className="font-medium text-zinc-50">{children}</span>
        </div>
        {!isLastItem && (
          <ArrowRightIcon className={styles.sidebarIcon} width={16} height={16} />
        )}
      </a>
    </li>
  );
};

export default SidebarItem;
