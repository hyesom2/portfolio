import styles from "@/components/Instagram/MenuBar/MenuBar.module.css";
import Icon from "@/components/Instagram/InstaIcons";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <section className={styles["menubar"]}>
      <nav className={styles["menu"]}>
        <h1 className={styles.logo}>
          <Link to="/instagram">
            <Icon name="icon-instagram_logo" />
          </Link>
        </h1>
        <ul className={styles["menu-list"]}>
          <li>
            <Icon name="icon-home-filled" />
            <Link to="/instagram">Home</Link>
          </li>
          <li className={styles["is-active"]}>
            <Icon name="icon-profile" />
            <Link to="/instagram/profile">Profile</Link>
          </li>
        </ul>
        <button type="button" className={styles["more"]}>
          <Icon name="icon-menu" />
          <span>More</span>
        </button>
      </nav>
    </section>
  )
}

export default MenuBar;