import styles from "@/components/Instagram/ProfileHeader/ProfileHeader.module.css";

function ProfileHeader() {
  return (
    <header className={styles["profile-header"]}>
      <h1 className="sr-only">프로필</h1>
      <div className={styles.profile}>
        <figure className={styles["profile-img"]}>
          <img src="https://i.namu.wiki/i/jdy3I-m6CseVXUGjyBpOAl2Fri4bMKg2MHCTI7nYKB0PHk52GFHMpL-94DhOgIk_ADiwnE6WLSNEP28WuNpWRw.webp" alt="김현주" />
          <figcaption className="sr-only">김현주</figcaption>
        </figure>
        <div className={styles["profile-info-wrapper"]}>
          <div className={styles["profile-info"]}>
            <strong>김현주</strong>
            <div className={styles["button-group"]}>
              <button type="button">Following<span className="instagram icon-chevron-down"></span></button>
              <button type="button">Message</button>
              <button type="button"><span className="instagram icon-add-user"></span></button>
            </div>
            <button type="button"><span className="instagram "></span></button>
          </div>
          <dl className={styles["follow-container"]}>
            <div className={styles["follow-wrapper"]}>
              <dt>5</dt>
              <dd>posts</dd>
            </div>
            <div className={styles["follow-wrapper"]}>
              <dt>1</dt>
              <dd>followers</dd>
            </div>
            <div className={styles["follow-wrapper"]}>
              <dt>1</dt>
              <dd>following</dd>
            </div>
          </dl>
          <div>
            자기소개
          </div>
        </div>
      </div>
      <ul className={styles["story-list"]}>
        <li>
          <figure>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8CRGWRZPbCfuuqLMVI9hrnlYfFGXJQSa_Q&s" alt="스토리1" />
            <figcaption>치즈덕1</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="https://www.wishbucket.io/_next/image?url=https%3A%2F%2Fd2gfz7wkiigkmv.cloudfront.net%2Fpickin%2F2%2F1%2F2%2FUsZmPTA3SUuHjgiFpOCfsg&w=1080&q=75" alt="스토리2" />
            <figcaption>치즈덕2</figcaption>
          </figure>
        </li>
      </ul>
    </header>
  )
}

export default ProfileHeader;