import styles from "./MacOs.module.css";
import MenuBar from "@/components/MacOs/MenuBar/MenuBar";
import Dock from "@/components/MacOs/Dock/Dock";
import WindowFrame from "@/components/MacOs/WindowFrame/WindowFrame";
import Instagram from "@/pages/Instagram/Instagram";

function MacOs() {
  return (
    <>
      <section className={`${styles.container} ${styles.light}`}>
        <MenuBar type="light" />
        <Dock type="light" />
        <WindowFrame type="light-active" title="Instagram">
          <Instagram />
        </WindowFrame>
      </section>
    </>
  );
}

export default MacOs;