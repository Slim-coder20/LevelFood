// C'est le fichier qui sert a communiquer avec la base de données //
import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss"; 

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

// Cette fonction nous permet de sauvegarder  une nouvelle recette de repas vers la base de données //
/**
 * Nous commençon par installer la librairie slugify et xss 
 * Slugify : nous permet de générer des slugs en chaine de caractères 
 * xss : nous permet de se protéger contre les attaques XSS : Injection SQL dans l'application // 
 */ 
export async function saveMeal(meal) {
  /**
   * Nous commençon par générer un slug en combinant le titre de la recette et le slugify 
   * Puis nous protégeons les instructions de la recette contre les attaques XSS 
   */
 meal.slug = slugify(meal.title, {lower: true});
 meal.instructions = xss(meal.instructions)
  /**
   * Nous commençon par récupérer l'extension de l'image 
   * Puis nous générons un nom de fichier unique en combinant le slug et l'extension 
   * Nous retournons le nom de fichier généré 
   */
 const extension = meal.image.name.split('.').pop(); 
 const fileName = `${meal.slug}.${extension}`
 /**
  * 
  * nous enregistrons l'image dans le dossier public / images
  * Nous retournons le nom de fichier généré 
  */
 const stream = fs.createWriteStream(`public/images/${fileName}`);
 const bufferedImage = await meal.image.arrayBuffer() 
 stream.write(Buffer.from(bufferedImage), (error) => {
  if (error ) {
    throw new Error("Saving Image failed!");
    
  }
 });
 /**
  * Nous enregistrons la recette dans la base de données 
  * Nous retournons le nom de fichier généré 
  */
 meal.image = `/images/${fileName}`;
 const result = db
   .prepare(
     `
  INSERT INTO meals (title,summary, instructions, creator, creator_email, image, slug) 
  VALUES (?, ?, ?, ?, ?, ?, ?)
  `,
   )
   .run(
     meal.title,
     meal.summary,
     meal.instructions,
     meal.creator,
     meal.creator_email,
     meal.image,
     meal.slug,
   );

}