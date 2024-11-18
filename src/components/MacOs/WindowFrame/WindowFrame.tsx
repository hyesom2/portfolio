import { ReactNode } from "react";
import styles from "./WindowFrame.module.css";
import TitleBar from "@/components/MacOs/TitleBar/TitleBar";

interface WindowFrameTypes {
  children?: ReactNode;
  type: string;
  title?: string;
  blur?: boolean;
}

function WindowFrame({ children, type, title, blur }: WindowFrameTypes) {
  return (
    <section className={`no-scroll ${styles["window-frame"]} ${styles[type]} ${blur ? styles["blur"] : ""}`}>
      <TitleBar type={`${type}`}>{ title }</TitleBar>
      <div className={`${styles.contents}`}>
        { children }
      </div>
    </section>
  )
}

export default WindowFrame;