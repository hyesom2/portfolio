import styles from "@/pages/Instagram/Profile/Profile.module.css";
import ProfileHeader from "@/components/Instagram/ProfileHeader/ProfileHeader";
import ProfileBody from "@/components/Instagram/ProfileBody/ProfileBody";

function Profile() {
  return (
    <section className={styles["profile-container"]}>
      <ProfileHeader />
      <ProfileBody />
    </section>
  )
}

export default Profile;