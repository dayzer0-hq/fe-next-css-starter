import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js + CSS Modules starter</h1>
      <p className={styles.subtitle}>
        It runs. Styled with <span className={styles.badge}>CSS Modules</span>.
      </p>
    </main>
  );
}
