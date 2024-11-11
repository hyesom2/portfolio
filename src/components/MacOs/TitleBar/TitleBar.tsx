import { ReactNode } from "react";
import styles from "./TitleBar.module.css";
import TrafficLights from "@/components/MacOs/TrafficLights/TrafficLights";

interface TitleBarTypes {
  children: ReactNode;
  type: string;
}

function TitleBar({ children, type }: TitleBarTypes) {
  return (
    <header className={`${styles["title-bar"]} ${styles[type]}`}>
      <h2 className={`${styles.title}`}>{children}</h2>
      <TrafficLights type={type} />
    </header>
  )
}

export default TitleBar;