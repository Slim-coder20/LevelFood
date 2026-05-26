import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import MealsLoading from "./loading-out";
import { Suspense } from "react";


async function MealsFetch() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={styles.highlight}>By You</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and
          Fine{" "}
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<MealsLoading />}>
          <MealsFetch />
        </Suspense>
      </main>
    </>
  );
}
