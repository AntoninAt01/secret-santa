// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-10 rounded-3xl bg-secondary ">
      
      <h2 className="text-2xl pb-9 text-primary font-bold" >Ajoutez les participants</h2>
      <h3 className="text-lg text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Ajouter un participant</h3>
      <div className="flex space-x-2 bg-gray-100 p-4 rounded-3xl border-4 border-white-500">
        <input
          type="text"
          className="input flex-grow"
          placeholder="Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button className="button" onClick={addParticipant}>
          Ajouter
        </button>
      </div>
      <h3 className="text-lg pt-9 text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Participants</h3>
      <ul className="space-y-2">
        {participants.map((name, index) => (
          <li key={index} className="list-item w-40 rounded-3xl bg-white p-4 text-black border-4 border-white-500">
            {name}
            <div className="space-x-2">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => onRemoveParticipant(index)}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
