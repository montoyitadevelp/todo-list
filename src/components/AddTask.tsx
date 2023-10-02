import { allTitle } from "../types"
import { CreateAll } from "./createAll"

interface Props {
    addAll: ({title}: allTitle) => void
}


export const AddTask: React.FC<Props> = ({ addAll }) => {
  return (
    <>
     <header className="header">
        <h1>Tasks</h1>
     </header>
     <CreateAll saveAll={addAll}/>
    </>
  )
}
