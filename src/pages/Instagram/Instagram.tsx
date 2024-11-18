import styles from "@/pages/Instagram/Instagram.module.css";
import { useEffect } from "react";
import dockStore from "@/store/MacOs/dockStore";
import { Outlet, useLocation } from "react-router-dom";
import MenuBar from "@/components/Instagram/MenuBar/MenuBar";
import WindowFrame from "@/components/MacOs/WindowFrame/WindowFrame";

function Instagram() {
  const { instagramOpen, setInstagramOpen } = dockStore();
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === "/instagram") {
      setInstagramOpen(true);
    }
  }, [location, setInstagramOpen]);

  return (
    instagramOpen && (
      <WindowFrame type="light-active" title="Instagram">
        <div className={styles["instagram-container"]}>
          <MenuBar />
          <Outlet />
        </div>
      </WindowFrame>
    )
  )
}

export default Instagram;
