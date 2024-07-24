import { ReactComponent as LogoDashboard } from "../../assets/logo-dashboard.svg";
import { ReactComponent as KeySquareIcon } from "../../assets/key-square.svg";
import SidebarItem from "./SidebarItem";
import styles from "./Sidebar.module.scss";
import { sidebarListData } from "../../data";

export const Sidebar = () => {
  return (
    <aside className={styles.asideWrapper}>
      <div className={styles.logoWrapper}>
        <LogoDashboard width={195} height={39} />
        <span className={styles.logoText}>v.01</span>
      </div>

      <ul className={styles.sidebarList}>
        {sidebarListData.map((item, index) => (
          <SidebarItem
            key={item.id}
            pathname={item.pathname}
            src={process.env.PUBLIC_URL + item.icon}
            alt={`${item.namePage} icon`}
            isLastItem={index === 0}
          >
            {item.namePage}
          </SidebarItem>
        ))}
      </ul>
    </aside>
  );
};
