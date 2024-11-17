import styles from "@/components/Instagram/ProfileBody/ProfileBody.module.css";
import Icon from "@/components/Instagram/InstaIcons";

function ProfileBody() {
  return (
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
        <li className={styles["profile-posts-item"]}>
          <figure>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMzAyMThfMjM4/MDAxNjc2NjUwMjk5NTc0.pB-p7Xhgkmaur1N8hWszE_GlZaFmm7qOV0Zxv5JVGcgg.Ncq_5WQgVfnYal8EhF2l_sCn_-JSETrbASgchtLuiVQg.PNG.azzi_01/%EA%B0%99%EC%9D%B4%EA%BD%83%EB%86%80%EC%9D%B4%EA%B0%88%EB%9E%98.png?type=w800" alt="" />
            <figcaption className="sr-only">포트폴리오</figcaption>
          </figure>
          <Icon name="icon-gallery" />
        </li>
        <li className={styles["profile-posts-item"]}>
          <figure>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMzAyMThfMjM4/MDAxNjc2NjUwMjk5NTc0.pB-p7Xhgkmaur1N8hWszE_GlZaFmm7qOV0Zxv5JVGcgg.Ncq_5WQgVfnYal8EhF2l_sCn_-JSETrbASgchtLuiVQg.PNG.azzi_01/%EA%B0%99%EC%9D%B4%EA%BD%83%EB%86%80%EC%9D%B4%EA%B0%88%EB%9E%98.png?type=w800" alt="" />
            <figcaption className="sr-only">포트폴리오</figcaption>
          </figure>
          <Icon name="icon-gallery" />
        </li>
        <li className={styles["profile-posts-item"]}>
          <figure>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMzAyMThfMjM4/MDAxNjc2NjUwMjk5NTc0.pB-p7Xhgkmaur1N8hWszE_GlZaFmm7qOV0Zxv5JVGcgg.Ncq_5WQgVfnYal8EhF2l_sCn_-JSETrbASgchtLuiVQg.PNG.azzi_01/%EA%B0%99%EC%9D%B4%EA%BD%83%EB%86%80%EC%9D%B4%EA%B0%88%EB%9E%98.png?type=w800" alt="" />
            <figcaption className="sr-only">포트폴리오</figcaption>
          </figure>
          <Icon name="icon-gallery" />
        </li>
        <li className={styles["profile-posts-item"]}>
          <figure>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMzAyMThfMjM4/MDAxNjc2NjUwMjk5NTc0.pB-p7Xhgkmaur1N8hWszE_GlZaFmm7qOV0Zxv5JVGcgg.Ncq_5WQgVfnYal8EhF2l_sCn_-JSETrbASgchtLuiVQg.PNG.azzi_01/%EA%B0%99%EC%9D%B4%EA%BD%83%EB%86%80%EC%9D%B4%EA%B0%88%EB%9E%98.png?type=w800" alt="" />
            <figcaption className="sr-only">포트폴리오</figcaption>
          </figure>
          <Icon name="icon-gallery" />
        </li>
        <li className={styles["profile-posts-item"]}>
          <figure>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMzAyMThfMjM4/MDAxNjc2NjUwMjk5NTc0.pB-p7Xhgkmaur1N8hWszE_GlZaFmm7qOV0Zxv5JVGcgg.Ncq_5WQgVfnYal8EhF2l_sCn_-JSETrbASgchtLuiVQg.PNG.azzi_01/%EA%B0%99%EC%9D%B4%EA%BD%83%EB%86%80%EC%9D%B4%EA%B0%88%EB%9E%98.png?type=w800" alt="" />
            <figcaption className="sr-only">포트폴리오</figcaption>
          </figure>
          <Icon name="icon-gallery" />
        </li>
        <li className={styles["profile-posts-item"]}>
          <figure>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMzAyMThfMjM4/MDAxNjc2NjUwMjk5NTc0.pB-p7Xhgkmaur1N8hWszE_GlZaFmm7qOV0Zxv5JVGcgg.Ncq_5WQgVfnYal8EhF2l_sCn_-JSETrbASgchtLuiVQg.PNG.azzi_01/%EA%B0%99%EC%9D%B4%EA%BD%83%EB%86%80%EC%9D%B4%EA%B0%88%EB%9E%98.png?type=w800" alt="" />
            <figcaption className="sr-only">포트폴리오</figcaption>
          </figure>
          <Icon name="icon-gallery" />
        </li>
        <li className={styles["profile-posts-item"]}>
          <figure>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMzAyMThfMjM4/MDAxNjc2NjUwMjk5NTc0.pB-p7Xhgkmaur1N8hWszE_GlZaFmm7qOV0Zxv5JVGcgg.Ncq_5WQgVfnYal8EhF2l_sCn_-JSETrbASgchtLuiVQg.PNG.azzi_01/%EA%B0%99%EC%9D%B4%EA%BD%83%EB%86%80%EC%9D%B4%EA%B0%88%EB%9E%98.png?type=w800" alt="" />
            <figcaption className="sr-only">포트폴리오</figcaption>
          </figure>
          <Icon name="icon-gallery" />
        </li>
      </ul>
    </body>
  )
}

export default ProfileBody;