import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.hello}>Hello Priyam!</h1>
        <p className={styles.welcome}>Welcome to Skill College</p>
      </div>
      <input type="text" className={styles.search} placeholder="Search" />
      <div className={styles.icons}>
        <span>🔔 6</span>
        <span>💬 157</span>
        <span className={styles.profile}>👤 Student Profile</span>
      </div>
    </header>
  );
}
