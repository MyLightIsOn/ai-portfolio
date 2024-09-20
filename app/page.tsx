"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "Basic chat": "basic-chat",
    "Function calling": "function-calling",
    "File search": "file-search",
    All: "all",
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      window.location.replace("/login");
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Explore sample apps built with Assistants API
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/examples/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
