import styles from "./PostModal.module.css";
import portfolioData from "@/data/portfolioData";
import postStore from "@/store/Instagram/postStore";
import { Link } from 'react-router-dom';
import Carousel from "@/components/Carousel/Carousel";
import Icons from '@/components/Instagram/InstaIcons';

function PostModal() {
  const { selectedPostId } = postStore();
  const post = portfolioData.find(item => item.id === selectedPostId);
  
  return (
    <article className={styles["post-modal"]}>
      <div className={styles.left}>
        {
          post
            ?
          (
            <Carousel mainImage={post.mainImage} images={post.image} />
          )
            :
          <p>이미지를 불러올 수 없습니다.</p>
        }
      </div>
      <div className={styles["postModal-right"]}>
        {
          post ?
            (
              <>
                <div className={styles["postModal-header"]}>
                  <img src={post.mainImage} alt={post.title} />
                  <div className={styles.project}>
                    <strong className={styles.title}>{post.title}</strong>
                    <p className={styles.desc}>{post.description}</p>
                    <ul className={styles["tag-list"]}>
                      {
                        post.skills.map((skill, index) => (
                          <li className={styles["tag-item"]} key={index}>
                            # {skill}
                          </li>
                        ))
                      }
                    </ul>
                    <time dateTime={ post.period }>{ post.period }</time>
                  </div>
                </div>
                <ul>
                  <li>
                    <Icons name="icon-link" />
                    <Link to={post.url}>DEMO</Link>
                  </li>
                  <li>
                    <Icons name="icon-link" />
                    <Link to={post.githubURL}>GitHub</Link>
                  </li>
                </ul>
              </>
            )
            :
            <p>포스트 내용을 찾을 수 없습니다.</p>
        }
      </div>
    </article>
  )
}

export default PostModal;