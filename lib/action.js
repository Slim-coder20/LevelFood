"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// Fonction pour valider le texte //
function isInvalidText(text) {
  return !text || text.trim("");
}

// Fonction pour sauvegarder la recette //
export async function shareMeal(prevState,formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // condition pour valider le formulaire //
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.image) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || meal.image.size === 0
  ) {
   return {
     message: "Invalid input. ",
   };
  }

  // sauvegarde de la recette //
  await saveMeal(meal);
  redirect("/meals");
}
