import styles from "./MenuBar.module.css";
import Icon from "@/components/MacOs/Icons";

interface MenuBarTypes {
  type: string;
}

function MenuBar({ type }: MenuBarTypes) {
  return (
    <section className={`${styles.container} ${styles[type]}`}>
      <h1 className={styles.logo}><Icon name="icon-logo_light" /></h1>
      <nav className={`${styles.menubar}`}>
        <ul className={`${styles["menus"]}`}>
          <li><button type="button">Finder</button></li>
          <li><button type="button">File</button></li>
          <li><button type="button">Edit</button></li>
          <li><button type="button">View</button></li>
          <li><button type="button">Go</button></li>
          <li><button type="button">Window</button></li>
          <li><button type="button">Help</button></li>
        </ul>
        <ul className={`${styles["items"]}`}>
          <li><button type="button"><Icon name="icon-wifi_light" /></button></li>
          <li><button type="button"><Icon name="icon-battery_light" /></button></li>
          <li><button type="button"><Icon name="icon-switch_light" /></button></li>
          <li>Mon Jun 22 9:41 AM</li>
        </ul>
      </nav>
    </section>
  )
}

export default MenuBar;