import styles from "@/components/Instagram/Overlay/Overlay.module.css";
import Icons from "@/components/Instagram/InstaIcons";
import postStore from '@/store/Instagram/postStore';
import { useNavigate } from "react-router-dom";

function Overlay() {
  const navigate = useNavigate();
  const { setPostModalOpen } = postStore();
  function PostModalCloseHandle() {
    navigate("/instagram/profile");
    setPostModalOpen(false);
  }
  return (
    <dialog open className={styles.overlay}>
      <button type="button" className={styles["overlay-close"]} onClick={ PostModalCloseHandle }>
        <Icons name="icon-close" />
      </button>
    </dialog>
  )
}

export default Overlay;