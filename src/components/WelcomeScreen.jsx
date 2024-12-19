// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart
import React from 'react';
import { SnowfallEffect } from './Anim'; // Chemin vers ton fichier


export function WelcomeScreen({ onStart }) {
  return (
    
    <div className=" flex flex-col text-center h-full space-y-6 items-center">
      <SnowfallEffect />
      <h1 className="text-6xl pb-10 pt-20 font-copu font-bold text-white" >Secret Santa</h1>
      <p className="text-lg text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
        Bienvenue dans l'application Secret Santa ! Organisez facilement votre
        échange de cadeaux entre amis ou collègues.
      </p>
      <img className="w-72" src="./PereNoel.png" alt="" />
      <button onClick={onStart} className="button text-lg px-8 py-3 bg-gray-100 rounded-3xl shadow-lg shadow-black">
        Commencer
      </button>
    </div>
  );
}
