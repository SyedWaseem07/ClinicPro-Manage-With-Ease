import { createContext, useContext, useState } from "react";

// create
const SearchedPatientsContext = createContext(null);

export const SearchedPatientsContextProvider = (props) => {
  const [filteredPatients, setFilteredPatients] = useState([]);
  return (
    <SearchedPatientsContext.Provider value={{ filteredPatients, setFilteredPatients }}>
      {props.children}
    </SearchedPatientsContext.Provider>
  )
}

export const useSearchedPatientsContext = () => {
  const value = useContext(SearchedPatientsContext);
  return value;
}