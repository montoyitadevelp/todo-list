import { AllObject, allId, type listOfAlls } from "../types";
import { List } from "./List";

interface Props {
  alls: listOfAlls;
  removeAll: (id: allId) => void
  completedAll: ({id, completed}: Pick<AllObject, "id" | "completed">) => void
}

export const Alls: React.FC<Props> = ({ alls, removeAll, completedAll }) => {
  return (
    <>
      <ul className="todo-list">
        {alls.map((all) => (
          <li key={all.id} className={`${all.completed ? "Completed" : ""}`}>
            <List
              key={all.id}
              id={all.id}
              title={all.title}
              completed={all.completed}
              removeAll={removeAll}
              completedAll={completedAll}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
