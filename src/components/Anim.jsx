import { useEffect } from 'react';

export function SnowfallEffect() {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('img');
      const floconType = Math.random() > 0.5 ? '1' : '2'; // Choisir aléatoirement le type de flocon
      snowflake.src = `./Flocon${floconType}.svg`; // Accéder correctement aux images dans public
      snowflake.className = 'snowflake'; // Ajout de la classe CSS pour l'animation

      // Choisir une taille aléatoire entre 20px et 50px
      const size = Math.random() * 30 + 20; // Taille entre 20px et 50px
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;

      // Position horizontale aléatoire (entre 0 et 100% de la largeur de la fenêtre)
      snowflake.style.left = `${Math.random() * 100}vw`;

      // Position verticale initiale en dehors de l'écran (au-dessus de la fenêtre)
      snowflake.style.top = `-${size}px`; // Positionne le flocon juste au-dessus de l'écran

      // Opacité aléatoire
      snowflake.style.opacity = Math.random();

      // Durée aléatoire de l'animation de chute (entre 5s et 10s)
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;

      // Délai aléatoire avant que le flocon commence à tomber (pour que les flocons ne commencent pas tous au même moment)
      snowflake.style.animationDelay = `${Math.random() * 5}s`;

      // Ajouter le flocon au conteneur
      document.querySelector('.snowflakes-container').appendChild(snowflake);

      // Supprimer le flocon après qu'il ait fini de tomber
      setTimeout(() => {
        snowflake.remove();
      }, 8000); // Durée de vie du flocon (équivalente à la durée de l'animation)
    };

    // Créer un flocon toutes les 100ms
    const interval = setInterval(createSnowflake, 100);

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, []);

  return (
    <div className="snowflakes-container"></div> // Conteneur fixe des flocons
  );
}