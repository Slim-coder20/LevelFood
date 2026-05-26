import { getMeal } from "@/lib/meals";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function mealsDetails({ params }) {
  const meal = getMeal(params.mealSlug);


  // On met une condition pour vérfier si le repas existe ou non on utilise la fonction 
  // NotFound pour générer une page d'erreur 404

  if(!meal){
    notFound();
  }

  /**
   * La méthode replace(/\n/g, "<br/>") est utilisée pour remplacer les sauts de ligne (\n) 
   * par des balises <br/> dans la propriété instructions de l'objet meal. 
   * Cela permet de rendre les instructions plus lisibles en les affichant sur plusieurs lignes.
   */
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
