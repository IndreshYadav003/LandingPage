
"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page() {
  const router = useRouter();

  function handle() {
    router.push("/NewLaunches");
  }

  return (
    <main className={styles.main}>

      <div className={styles.content}>

        {/* Small Heading */}
        <span className={styles.headingh}>
          A FRESH BEGINNING
        </span>

        {/* Main Title */}
        <h1 className={styles.Title}>
          Explore Popular
          <span> Projects.</span>
        </h1>

        {/* Description and Button */}
        <div className={styles.descriptionRow}>

          <p className={styles.Discription}>
            Discover exceptional properties, explore premium
            developments and find a place that feels like home.
            Your next chapter begins with the right property.
          </p>

          <button
            className={styles.viewButton}
            onClick={handle}
          >
            View All Projects
            <span className={styles.arrow}>→</span>
          </button>

        </div>

      </div>

      {/* Decorative Background Text */}
      <div className={styles.backgroundText}>
        PROPERTIES
      </div>

    </main>
  );
}
