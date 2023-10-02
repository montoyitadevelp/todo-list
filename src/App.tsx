import { useState } from "react";
import { Alls } from "./components/Alls";
import { AllObject, allId, allTitle, filterValue } from "./types";
import { ALL_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";
import { v4 as uuidv4 } from 'uuid';

const mockupAlls = [
  {
    id: "1",
    title: "First project",
    completed: false,
  },
  {
    id: "2",
    title: "Second project",
    completed: false,
  },
  {
    id: "3",
    title: "third project",
    completed: false,
  },
];

const App = () => {
  const [alls, setAlls] = useState(mockupAlls);
  const [filterSelected, setFilterSelected] = useState<filterValue>(
    ALL_FILTERS.ALL
  );

  const handlerFilter = (filter: filterValue) => {
    setFilterSelected(filter);
  };

  //La id del objeto para removerlo
  const handleDelete = ({ id }: allId) => {
    const newAlls = alls.filter((all) => all.id !== id); //Filtrar sera buscar aquellos que no tengan esta id y los borra
    setAlls(newAlls);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<AllObject, "id" | "completed">) => {
    const newAlls = alls.map((all) => {
      if (all.id === id) {
        return {
          ...all,
          completed: completed,
        };
      }
      return all;
    });
    setAlls(newAlls);
  };

  const handleRemoveAllComplete = () => {
    const newAlls = alls.filter((all) => !all.completed)
    setAlls(newAlls)
  }

  const handleAddAll = ({title}: allTitle) => {
    const addAll = {
      title,
      id: uuidv4(),
      completed: false,
    }
    const addAlls = [...alls, addAll]
    setAlls(addAlls)
  }

  const filteredAlls = alls.filter((all) => {
    if (filterSelected === ALL_FILTERS.ALL) return !all.completed;
    if (filterSelected === ALL_FILTERS.COMPLETED) return all.completed;
    return all;
  });
  

  const activeAlls = alls.filter((all) => !all.completed).length;
  const completeAlls = alls.length - activeAlls;
  return (
    <>
      <div className="todoapp">
        <AddTask addAll={handleAddAll} />
        <Alls
          removeAll={handleDelete}
          completedAll={handleCompleted}
          alls={filteredAlls}
        />
        <Footer
          activeAlls={activeAlls}
          completedAlls={completeAlls}
          filteredSelected={filterSelected}
          handlerFilter={handlerFilter}
          clearCompleted={handleRemoveAllComplete}
        />
      </div>
    </>
  );
};

export default App;
