import styles from "@/pages/Instagram/Instagram.module.css";
import MenuBar from "@/components/Instagram/MenuBar/MenuBar";
import Profile from "@/pages/Instagram/Profile/Profile";

function Instagram() {
  return (
    <div className={styles["instagram-container"]}>
      <MenuBar />
      <Profile />
    </div>
  )
}

export default Instagram;