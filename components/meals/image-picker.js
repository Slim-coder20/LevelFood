"use client";
import Image from "next/image";
import styles from "./image-picker.module.css";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  /** Aperçu local : data URL renvoyée par FileReader (affichée dans <Image>) */
  const [pickedImage, setPickedImage] = useState();
  /** Réf sur l’input[type=file] masqué : on ouvre le dialogue fichiers depuis le bouton */
  const imageInput = useRef();

  function handlePickClick() {
    /** Déclenche programmatiquement le sélecteur de fichier du navigateur */
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    /** Lit le fichier côté client et produit une data URL exploitable par <Image src="..." /> */
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        {/*
          Input fichier natif, masqué en CSS : le UX passe par le bouton "Pick".
          - id/name : liaison au <label htmlFor={name}> et envoi du champ au submit du formulaire.
          - accept : restreint le dialogue aux types affichés (PNG / JPEG).
          - required : validation HTML5 tant qu’aucun fichier n’est choisi (si le form l’utilise).
        */}
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg image/webp"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
