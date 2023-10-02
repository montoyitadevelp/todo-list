import { allId, AllObject, type AllObject as AllType } from "../types";

interface Props extends AllType {
  removeAll: ({ id }: allId) => void;
  completedAll: ({
    id,
    completed,
  }: Pick<AllObject, "id" | "completed">) => void;
}

export const List: React.FC<Props> = ({
  id,
  title,
  completed,
  removeAll,
  completedAll,
}) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    completedAll({
      id,
      completed: event.target.checked,
    });
  };
  return (
    <>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleChangeCheckbox}
        />
        <label>{title}</label>
        <button className="destroy" onClick={() => removeAll({ id })}></button>
      </div>
    </>
  );
};
