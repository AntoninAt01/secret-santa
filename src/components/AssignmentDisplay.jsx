// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {
  return (
    <>
    
      <div className="flex flex-col items-center space-y-4 p-10 rounded-3xl bg-secondary">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Attributions des cadeaux</h2>
        <ul className="space-y-2">
          {assignments.map((assignment, index) => (
            <li className="text-white border-4 p-4 rounded-4xl border-white-500" key={index}>
              <span>{assignment.giver}</span> offre un beau cadeau à{" "}
              <span>{assignment.receiver}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
