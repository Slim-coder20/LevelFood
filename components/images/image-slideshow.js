"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import styles from './image-slideshow.module.css';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  /**
   * Ce useEffect est utilisé pour changer l'image toutes les 5 secondes en utilisant 
   * la méthode setInterval qui permet de démarrer un intervalle de temps et de répéter 
   * une action à intervalle régulier.
   */
  useEffect(() => {

    const interval = setInterval(() => {
      // On incrémente l'index de l'image actuelle en utilisant la méthode setCurrentImageIndex
      // On utilise la méthode setCurrentImageIndex =>
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    // On retourne une fonction qui sera exécutée lors du démontage du composant
    // Cette fonction permet de nettoyer l'intervalle de temps en utilisant la méthode clearInterval
    return () => clearInterval(interval);
  }, []);

  // On retourne un div avec la classe styles.slideshow et on mappe les images avec l'index et la classe styles.active
  // On utilise la méthode map pour créer un nouveau tableau avec les images
  // On utilise la méthode Image de Next.js pour afficher l'image avec l'index et la classe styles.active
  // On utilise la méthode alt pour afficher le texte alternatif de l'image
  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}