"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

export default function Navlink({ href, children }) {
  const path = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
      >
        {children}
      </Link>
    </li>
  );
}
