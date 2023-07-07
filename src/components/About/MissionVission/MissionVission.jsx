import React from "react";
import Container from "@/components/Container/Container";
import styles from "./MissionVission.module.css";
import MissionVissionCard from "./MissionVissionCard";

export default function MissionVission() {
  return (
    <section id={styles.missionVission}>
      <Container>
        <div className={`${styles.mvPanel} flex justify-between align-center`}>
          <MissionVissionCard
            subtitle="Our growth mission"
            title="On a mission to enable and endorse our clients"
            desc="Through sustainable innovation, effective support, and objective guidance, achieving comprehensive financial growth and long-term partnerships."
          />
          <MissionVissionCard
            subtitle="Our ambitious vision"
            title="We aim to lead the fintech market"
            desc="with our innovation, expertise, and partnership to endorse businesses with ongoing financial growth."
          />
        </div>
      </Container>
    </section>
  );
}
