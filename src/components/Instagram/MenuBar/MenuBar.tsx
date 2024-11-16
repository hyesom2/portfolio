import styles from "@/components/Instagram/MenuBar/MenuBar.module.css";
import Icon from "@/components/Instagram/InstaIcons";

function MenuBar() {
  return (
    <section className={styles["insta-menubar"]}>
      <nav className={styles["menu"]}>
        <h1 className={styles.logo}>
          <a href="/">
            <Icon name="icon-instagram_logo" />
          </a>
        </h1>
        <ul className={styles["menu-list"]}>
          <li className={styles["is-active"]}>
            <Icon name="icon-home-filled" />
            <a href="">Home</a>
          </li>
          <li>
            <Icon name="icon-search" />
            <button type="button">Search</button>
          </li>
          <li>
            <Icon name="icon-reels" />
            <a href="">Reels</a>
          </li>
          <li>
            <Icon name="icon-messages" />
            <a href="">Messages</a>
          </li>
          <li>
            <Icon name="icon-like" />
            <a href="">Notifications</a>
          </li>
          <li>
            <Icon name="icon-create" />
            <a href="">Create</a>
          </li>
          <li>
            <Icon name="icon-profile" />
            <a href="/profile">Profile</a>
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