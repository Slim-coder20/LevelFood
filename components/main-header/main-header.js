import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        {/* Logo Application  */}
        <Link href="/" className={styles.logo}>
          <Image
            src={logoImg}
            alt="A plate with food on it "
            whidth={35}
            height={35}
            priority
          />
          NextLevel Food
        </Link>
        {/* Navbar Application  */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals </Link>
            </li>
            <li>
              <Link href="/community">Foodies Community </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
