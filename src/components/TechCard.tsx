import type {Technology} from "../types";

interface TechCardProps {
  tech: Technology;
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

const TechCard = ({tech, stack, handleAddToStack}: TechCardProps) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  return (
    <div className="border border-gray-200 rounded-xl p-5">
      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-12 h-12 object-contain"
        />

        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold mt-4">{tech.name}</h3>

      {/* Description */}
      <p className="text-gray-600 mt-2">{tech.description}</p>

      {/* Category + Difficulty */}
      <div className="flex justify-between mt-4 text-sm">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
      </div>

      {/* Rating */}
      <p className="mt-3">⭐ {tech.rating}</p>

      {/* Button */}
      <button
        onClick={() => handleAddToStack(tech)}
        disabled={isAdded}
        className="w-full mt-4 bg-black text-white py-2 rounded-lg disabled:bg-gray-400"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
