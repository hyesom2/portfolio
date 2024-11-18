import styles from "./Dock.module.css";
import Divide from "@/components/Divide/Divide";
import { useNavigate } from "react-router-dom";
import dockStore from "@/store/MacOs/dockStore";

interface DockTypes {
  type: string;
}

function Dock({ type }: DockTypes) {
  const { setInstagramOpen } = dockStore();
  const navigate = useNavigate();
  function openInstagram() {
    navigate("/instagram");
    setInstagramOpen(true);
  }
  return (
    <nav className={`${styles.container} ${styles[type]}`}>
      <ul>
        <li>
          <button type="button" onClick={ openInstagram }>
            <figure>
              <img src="/assets/images/instagram.webp" alt="" />
              <figcaption>instagram</figcaption>
            </figure>
          </button>
        </li>
        <Divide margin={16} height={64} color="rgba(0, 0, 0, 0.3)" />
        <li>
          <button type="button">
            <figure>
              <img src="/assets/images/trash_light.webp" alt="" />
              <figcaption>trash</figcaption>
            </figure>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Dock;