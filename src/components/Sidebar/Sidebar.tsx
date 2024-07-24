
import { ReactComponent as ArrowRightIcon } from '../../assets/logo-dashboard.svg';
import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <aside className={styles.asideWrapper}>
      <div className={styles.logoWrapper}>
      <ArrowRightIcon width={195} height={39} />
      <span className={styles.logoText}>v.01</span>
      </div>
     
      <ul className="space-y-7">
        <SidebarItem
          pathname="/dashboard"
          src=""
          alt="dashboard icon"
        >
          Dashboard
        </SidebarItem>
        <SidebarItem
          pathname="/customers"
          src=""
          alt="ustomers icon"
        >
          Companies
        </SidebarItem>
      </ul>
    </aside>
  )
}
