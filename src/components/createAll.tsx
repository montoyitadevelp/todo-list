import { useState } from "react";
import { allTitle } from "../types";

interface Props {
  saveAll: ({ title }: allTitle) => void;
}

export const CreateAll: React.FC<Props> = ({ saveAll }) => {
  const [inputValue, setInputValue] = useState("");

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveAll({ title: inputValue})
    setInputValue('')
 }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          value={inputValue}
          onChange={(event) => {setInputValue(event.target.value)}}
          placeholder="Write your task, here"
          autoFocus
        />
      </form>
    </>
  );
};
