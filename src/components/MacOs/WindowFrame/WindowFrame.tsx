import { ReactNode } from "react";
import styles from "./WindowFrame.module.css";
import TitleBar from "@/components/MacOs/TitleBar/TitleBar";

interface WindowFrameTypes {
  children?: ReactNode;
  type: string;
  blur?: boolean;
}

function WindowFrame({ children, type, blur }: WindowFrameTypes) {
  return (
    <section className={`${styles["window-frame"]} ${styles[type]} ${blur ? styles["blur"] : ""}`}>
      <TitleBar type={`${type}`}>Windows Title (Active)</TitleBar>
      <div className={`${styles.contents}`}>
        {children}  
      </div>
    </section>
  )
}

export default WindowFrame;