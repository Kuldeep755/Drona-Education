"use client";
import styles from "../styles/Sidebar.module.css";
import {
  FaBook,
  FaUser,
  FaCalendarAlt,
  FaClipboardCheck,
  FaLifeRing,
  FaTasks,
  FaBriefcase,
  FaAddressBook,
  FaRegListAlt,
  FaPlus,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function Sidebar({ setActiveTab, activeTab }) {
  const menuItems = [
    { name: "Manage User", icon: <FaUser /> },
    { name: "Academic", icon: <FaBook /> },
    { name: "Time Table", icon: <FaCalendarAlt /> },
    { name: "Attendance", icon: <FaClipboardCheck /> },
    { name: "Help Desk", icon: <FaLifeRing /> },
    { name: "Task", icon: <FaTasks /> },
    { name: "Placement", icon: <FaBriefcase /> },
    { name: "Directory", icon: <FaAddressBook /> },
    { name: "Exam", icon: <FaRegListAlt /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Skill.College</h2>
      <p className={`${styles.OverView}`}>
        <MdDashboard className={styles.icon} /> Overview
      </p>
      <div className={styles.line}></div>

      <div className={styles.navBox}>
        <ul className={styles.navList}>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`${styles.navItem} ${
                activeTab === item.name ? styles.active : ""
              }`}
              onClick={() => setActiveTab(item.name)}
            >
              <span className={styles.icon}>{item.icon}</span> {item.name}
            </li>
          ))}
        </ul>
      </div>

      <button className={styles.addNew}>
        <FaPlus className={styles.icon} /> Add New
      </button>
    </aside>
  );
}
