import TechCard from "./TechCard";
import type {Technology} from "../types";

interface TechListProps {
  technologies: Technology[];
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

const TechList = ({technologies, stack, handleAddToStack}: TechListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          stack={stack}
          handleAddToStack={handleAddToStack}
        />
      ))}
    </div>
  );
};

export default TechList;
