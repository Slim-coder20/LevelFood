"use server";

/**
   * Pour la soumission du formulaire nous utiliseront une fonction server action
   * qui s'executera côté serveur : Server Action
   */
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  console.log(meal); 
}
