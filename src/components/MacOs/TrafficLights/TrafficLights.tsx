import styles from "./TrafficLights.module.css";
import dockStore from "@/store/MacOs/dockStore";
import { useNavigate } from "react-router-dom";

interface TrafficLightsTypes {
  type: string;
}

function TrafficLights({ type }: TrafficLightsTypes) {
  const navigate = useNavigate();
  const { instagramOpen, setInstagramOpen } = dockStore();
  function closeButtonHandle() {
    if (instagramOpen) {
      navigate("/");
      setInstagramOpen(false);
    }
  }

  switch (type) {
    case "light-active": {
      return (
        <ul className={`${styles["traffic-lights"]} ${styles.light} ${styles.active}`}>
          <li>
            <button type="button" className={`${styles.button} ${styles.close}`} onClick={ closeButtonHandle }></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.minimize}`}></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.maximize}`}></button>
          </li>
        </ul>
      )
    }
    case "light-inactive": {
      return (
        <ul className={`${styles["traffic-lights"]} ${styles.light} ${styles.inactive}`}>
          <li>
            <button type="button" className={`${styles.button} ${styles.close}`} disabled></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.minimize}`} disabled></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.maximize}`} disabled></button>
          </li>
        </ul>
      )
    }
    case "light-active-not": {
      return (
        <ul className={`${styles["traffic-lights"]} ${styles.dark} ${styles.active} ${styles["non-expandable"]}`}>
          <li>
            <button type="button" className={`${styles.button} ${styles.close}`}></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.minimize}`}></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.maximize}`} disabled></button>
          </li>
        </ul>
      )
    }
    case "dark-active": {
      return (
        <ul className={`${styles["traffic-lights"]} ${styles.dark} ${styles.active}`}>
          <li>
            <button type="button" className={`${styles.button} ${styles.close}`}></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.minimize}`}></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.maximize}`}></button>
          </li>
        </ul>
      )
    }
    case "dark-inactive": {
      return (
        <ul className={`${styles["traffic-lights"]} ${styles.dark} ${styles.inactive}`}>
          <li>
            <button type="button" className={`${styles.button} ${styles.close}`} disabled></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.minimize}`} disabled></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.maximize}`} disabled></button>
          </li>
        </ul>
      )
    }
    case "dark-active-not": {
      return (
        <ul className={`${styles["traffic-lights"]} ${styles.light} ${styles.active} ${styles["non-expandable"]}`}>
          <li>
            <button type="button" className={`${styles.button} ${styles.close}`}></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.minimize}`}></button>
          </li>
          <li>
            <button type="button" className={`${styles.button} ${styles.maximize}`} disabled></button>
          </li>
        </ul>
      )
    }
  }
}

export default TrafficLights;