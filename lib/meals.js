// C'est le fichier qui sert a communiquer avec la base de données //
import sql from "better-sqlite3";

const db = sql("meals.db");

// Cette focntion nous permet de récupérer tous les repas depuis la base de données // 

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

// Cette focntion nous permet de récupérer un repas spécifique depuis son slug dans la BD// 
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ? ").get(slug);
}