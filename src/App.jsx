import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";

import React from 'react';
import { SnowfallEffect } from './components/Anim'; // Chemin vers ton fichier

export default function App() {
  // Tableau des participants
  const [participants, setParticipants] = useState([]);
  // Tableau des assignments
  const [assignments, setAssignments] = useState([]);
  // Etat de l'application welcome | input | assignments
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Fonction pour ajouter un participant
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  // Fonction pour supprimer un participant
  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  // Fonction pour distribuer les cadeaux
  const distributeGifts = () => {
    // S'il n'y a pas assez de participants, on affiche une alerte
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    // On mélange le tableau des participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    // On crée un nouveau tableau d'assignments
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    // On met à jour le state des assignments
    setAssignments(newAssignments);
    // On affiche l'écran des assignments
    setCurrentScreen("assignments");
  };

  // Fonction pour recommencer l'application
  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className="container mx-auto p-4 bg-cover bg-center">
      <SnowfallEffect />
      <div className="flex flex-col items-center space-y-6">
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("input")} />
        )}
        {currentScreen === "input" && (
          <>
            <h2 className="text-6xl pb-20 pt-20 font-copu font-bold text-white">Secret Santa</h2>
            <ParticipantInput
              onAddParticipant={addParticipant}
              participants={participants}
              onRemoveParticipant={removeParticipant}
            />
            <div className="flex mt-6 w-64 h-10 bg-red items-center rounded-4xl">
              <button className="button w-full text-white" onClick={distributeGifts}>
                Distribuer les cadeaux
              </button>
            </div>
          </>
        )}
        {currentScreen === "assignments" && (
          <>
            <h2 className="text-6xl pb-20 pt-20 font-copu font-bold text-white">Secret Santa</h2>
            <AssignmentDisplay assignments={assignments} />
            <div className="mt-6">
              <button className="button text-lg px-8 py-3 bg-gray-100 rounded-3xl shadow-lg shadow-black" onClick={resetApp}>
                Recommencer
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
