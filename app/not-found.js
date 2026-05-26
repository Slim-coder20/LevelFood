import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
     <main className={styles.notFound}>
        <p>This page does not exist. Please try again.</p>
        <Link href="/" className={styles.link}>Go to home</Link>
     </main>
  )
}