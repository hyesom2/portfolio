import styles from "@/components/Instagram/ProfileHeader/ProfileHeader.module.css";
import Icons from "@/components/Instagram/InstaIcons";
import portfolioData from "@/data/portfolioData";
import { Link } from "react-router-dom";

function ProfileHeader() {
  return (
    <header className={styles["profile-header"]}>
      <h1 className="sr-only">프로필</h1>
      <div className={styles.profile}>
        <figure className={styles["profile-img"]}>
          <img src="/assets/data/images/profile.webp" alt="김현주" />
          <figcaption className="sr-only">김현주</figcaption>
        </figure>
        <div className={styles["profile-info-wrapper"]}>
          <div className={styles["profile-info"]}>
            <div className={styles["info-name"]}>
              <strong>김현주</strong>
              <Icons name="icon-badge" />
            </div>
            <div className={styles["button-group"]}>
              <button type="button" className={styles.following}>Following<Icons name="icon-chevron-down" /></button>
              <Link to="https://malleable-skull-31c.notion.site/1439b76e401c80b3b186c7524702373e" className={styles.resume}>resume</Link>
            </div>
          </div>
          <dl className={styles["follow-container"]}>
            <div className={styles["follow-wrapper"]}>
              <dt>{ portfolioData.length }</dt>
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
          <ul className={styles["self-introduction-list"]}>
            <li><strong>프론트엔드 개발자</strong></li>
            <li><Icons name="icon-link" /><a href="https://github.com/hyesom2">github</a></li>
            <li><Icons name="icon-link" /><a href="https://hyesom.tistory.com">blog</a></li>
            <li><Icons name="icon-link" /><a href="mailto:kimhyesom1202@gmail.com">contact</a></li>
          </ul>
        </div>
      </div>
      <ul className={styles["story-list"]}>
        {
          portfolioData.map((story) => (
            <li className={styles["story-item"]} key={ story.id }>
              <img src={ story.mainImage } alt={ story.title } />
              <span>{ story.title }</span>
            </li>
          ))
        }
      </ul>
    </header>
  )
}

export default ProfileHeader;