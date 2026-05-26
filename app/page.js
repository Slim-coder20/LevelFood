import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={styles.content}>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>
              Level Food for Level Foodies
            </h1>
            <p className={styles.heroSubtitle}>
              Taste & share food from all over the world.
            </p>
          </div>
          <div className={styles.cta}>
            <Link href="/community" className={styles.ctaLink}>
              Join the Community
            </Link>
            <Link href="/meals" className={styles.ctaButton}>
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
