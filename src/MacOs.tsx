import styles from "./MacOs.module.css";
import MenuBar from "@/components/MacOs/MenuBar/MenuBar";
import Dock from "@/components/MacOs/Dock/Dock";

function MacOs() {
  return (
    <section className={`${styles.container} ${styles.light}`}>
      <MenuBar type="light" />
      <Dock type="light" />
    </section>
  );
}

export default MacOs;