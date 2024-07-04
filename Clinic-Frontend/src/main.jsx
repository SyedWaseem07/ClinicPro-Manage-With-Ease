import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PatientsContextProvider } from "./context/PatientDetails.context.jsx"
import { UpdatePatientContextProvider } from "./context/UpdatePatient.context.jsx"
import { SearchedPatientsContextProvider } from "./context/searchedPatients.context.jsx"
const queryClient = new QueryClient({
  queries: {
    refetchOnWindowsFocus: false,
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <PatientsContextProvider>
        <UpdatePatientContextProvider>
          <SearchedPatientsContextProvider>
            <App />
          </SearchedPatientsContextProvider>
        </UpdatePatientContextProvider>
      </PatientsContextProvider>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </BrowserRouter>
  </QueryClientProvider>,
)
