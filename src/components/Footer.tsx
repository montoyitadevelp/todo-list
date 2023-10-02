import { filterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  clearCompleted: () => void;
  activeAlls: number;
  completedAlls: number;
  filteredSelected: filterValue;
  handlerFilter: (filter: filterValue) => void;
}

export const Footer: React.FC<Props> = ({
  clearCompleted,
  activeAlls = 0,
  filteredSelected,
  completedAlls = 0,
  handlerFilter,
}) => {
  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeAlls}</strong> Pending tasks
        </span>
        <Filters
          filteredSelected={filteredSelected}
          filteredChange={handlerFilter}
        />
        {completedAlls > 0 && (
          <button onClick={clearCompleted} className="clear-completed">
            Clear tasks
          </button>
        )}
      </footer>
    </>
  );
};
