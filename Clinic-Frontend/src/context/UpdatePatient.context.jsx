// create context
import { createContext, useContext, useState } from "react"

export const UpdatePatientContext = createContext(null);

export const UpdatePatientContextProvider = (props) => {
  const [updatePatientDetails, setUpdatePatientDetails] = useState([]);
  return (
    <UpdatePatientContext.Provider value={{ updatePatientDetails, setUpdatePatientDetails }}>
      {props.children}
    </UpdatePatientContext.Provider>
  )
}


export const useUpdatePatientsContext = () => {
  const value = useContext(UpdatePatientContext);
  return value;
}