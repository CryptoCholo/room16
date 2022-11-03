import styles from '../styles/Home.module.css';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
        {/* <h1>SideBar</h1> */}
        <ul className={styles.nav}>
          <li className={styles.navitem}><span className={styles.linktext}>Home</span></li>
          <li className={styles.navitem}><span className={styles.linktext}>Explore</span></li>
          <li className={styles.navitem}><span className={styles.linktext}>Orders</span></li>
          <li className={styles.navitem}><span className={styles.linktext}>Profile</span></li>
          <li className={styles.navitem}><span className={styles.linktext}>Settings</span></li>
        </ul>
      </aside>
    )
}