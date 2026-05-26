"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import Navlink from "./nav-link";

export default function MainHeader() {
  const path = usePathname(); 
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
            <Navlink href="/meals">Browse Meals </Navlink>
            <Navlink href="/community">Foodies Community </Navlink>
          </ul>
        </nav>
      </header>
    </>
  );
}
