"use client"
import { useState } from "react";
import styles from "../app/styles/Home.module.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import ExamTabs from "./components/examTab";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Overview"); // Store active tab state

  return (
    <div className={styles.container}>
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className={styles.main}>
        <Header />
        <ExamTabs activeTab={activeTab} />
      </div>
    </div>
  );
}
