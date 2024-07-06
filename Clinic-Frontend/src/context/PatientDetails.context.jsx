// create context
import { createContext, useContext, useState } from "react"

export const PatientsContext = createContext(null);

export const PatientsContextProvider = (props) => {
  const [visitedPatients, setVisitedPatients] = useState([]);
  return (
    <PatientsContext.Provider value={{ visitedPatients, setVisitedPatients }}>
      {props.children}
    </PatientsContext.Provider>
  )
}


export const usePatientsContext = () => {
  const value = useContext(PatientsContext);
  return value;
}

