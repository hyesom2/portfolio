import styles from "@/components/Instagram/ProfileBody/ProfileBody.module.css";
import Icon from "@/components/Instagram/InstaIcons";
import portfolioData from "@/data/portfolioData";

function ProfileBody() {
  return (
    <>
      <body className={styles["profile-body"]}>
        <nav className={styles["profile-tab"]}>
          <ul className={styles["profile-tab-list"]} role="tablist">
            <li className={`${styles["is-active"]} ${styles["profile-tab-item"]}`} aria-selected={true} role="tab">
              <button>
                <Icon name="icon-grid" />
                <span>posts</span>
              </button>
            </li>
            <li className={`${styles["profile-tab-item"]}`} aria-selected={false} role="tab">
              <button>
                <Icon name="icon-reels" />
                <span>reels</span>
              </button>
            </li>
          </ul>
        </nav>
        <ul className={styles["profile-posts-list"]}>
          {
            portfolioData.slice().reverse().map((portfolio) => (
              <li className={styles["profile-posts-item"]} key={portfolio.id}>
                <figure>
                  <img src={ portfolio.image } alt={ portfolio.title } />
                  <figcaption className="sr-only">{ portfolio.title }</figcaption>
                </figure>
                <Icon name="icon-gallery" />
              </li>
            ))
          }
        </ul>
      </body>
    </>
  )
}

export default ProfileBody;