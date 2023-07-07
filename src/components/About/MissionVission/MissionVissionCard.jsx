import React from "react";
import styles from "./MissionVission.module.css";

export default function MissionVissionCard(props) {
  return (
    <div className={styles.mvCard}>
      <span className="text-themeBlue">{props.subtitle}</span>
      <div className={styles.mobileBg}>
        <div className={`${styles.boxBg}`}>
          <h3 className="text-themeBlue">{props.title}</h3>
        </div>
        <p className="text-themeBlue">{props.desc}</p>
      </div>
    </div>
  );
}
