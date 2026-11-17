"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import { getPopularProjects } from "../service/projectApi";
import styles from "./page.module.css";

type PopularProject = {
  id?: string | number;
  [key: string]: unknown;
};

export default function PopularProjects() {
  const [projects, setProjects] = useState<PopularProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        setError("");

        const response = await getPopularProjects();
        const data = [
          response,
          response?.data,
          response?.projects,
          response?.data?.projects,
          response?.results,
          response?.data?.results,
        ].find(Array.isArray);

        setProjects(data ?? []);
      } catch (err: unknown) {
        console.error("Project API error:", err);

        if (axios.isAxiosError<{ message?: unknown }>(err)) {
          const message = err.response?.data?.message;
          setError(
            typeof message === "string" && message
              ? message
              : err.message || "Unable to load properties."
          );
        } else {
          setError(
            err instanceof Error && err.message
              ? err.message
              : "Unable to load properties."
          );
        }
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  if (loading) {
    return <p className={styles["popular-projects"]}>Loading properties...</p>;
  }

  if (error) {
    return (
      <p className={`${styles["popular-projects"]} ${styles["project-error"]}`}>
        {error}
      </p>
    );
  }

  if (!projects.length) {
    return <p className={styles["popular-projects"]}>No properties found.</p>;
  }

  return (
    <section className={styles["popular-projects"]}>
      <div className={styles["popular-projects-grid"]}>
        {projects.map((project) => (
          <PropertyCard
            key={project.id}
            property={project}
          />
        ))}
      </div>
    </section>
  );
}
