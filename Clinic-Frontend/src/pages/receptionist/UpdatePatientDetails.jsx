import React, { useEffect, useState } from 'react'
import Form from '../../components/Form'
import { useUpdatePatientsContext } from "../../context/UpdatePatient.context"
import { useParams, NavLink } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'
const UpdatePatientDetails = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [formData, setFormData] = useState({
    "patient_name": "",
    "mobile_no": "",
    "age": 0,
    "weight": 0,
    "symptoms": "",
    "last_visited": "",
    "gender": ""
  })
  const [medicine, setMedicine] = useState({
    "patient_name": "",
    "medicine_name": "",
    "dosage": ""
  })
  const [report, setReport] = useState({
    "patient_name": "",
    "report_name": "",
    "reportFile": null
  })
  const [payment, setPayment] = useState({
    "patient_name": "",
    "amount": '',
    "date": ''
  })
  const queryClient = useQueryClient();


  const { mutate: step1Call, isLoading: step1Loading } = useMutation({
    mutationFn: async (formData) => {
      try {
        console.log("api call", { ...formData })
        const res = await axios.post('/api/v1/users/receptionist/updatePatientDetails', { ...formData });
        return res.data.data;
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: (data) => {
      toast.success("Step-1 completed successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  const { mutate: addMedicineCall, isLoading: medicineLoading } = useMutation({
    mutationFn: async (medicine) => {
      try {
        const res = await axios.post('/api/v1/users/receptionist/addMedicine', { ...medicine });
        return res.data.data;
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: (data) => {
      toast.success("Medcine added successfully");
      queryClient.invalidateQueries({ queryKey: ['allPatients'] })
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  const { mutate: addReportCall, isLoading: reportLoading } = useMutation({
    mutationFn: async (report) => {
      try {
        console.log("from api", report)
        const res = await axios.post('/api/v1/users/receptionist/addReport', report);
        return res.data.data;
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: (data) => {
      toast.success("Report added successfully");
      queryClient.invalidateQueries({ queryKey: ['allPatients'] })
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  const { mutate: addPaymentCall, isLoading: paymentLoading } = useMutation({
    mutationFn: async (payment) => {
      try {
        console.log(payment);
        const res = await axios.post('/api/v1/users/receptionist/addPaymentDetails', payment);
        return res.data.data;
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: (data) => {
      toast.success("Payment added successfully");
      queryClient.invalidateQueries({ queryKey: ['allPatients'] })
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })
  return (
    <>
      <Form formData={formData} setFormData={setFormData} fromUpdatePatient={true} medicine={medicine} setMedicine={setMedicine} report={report} setReport={setReport} payment={payment} setPayment={setPayment} step1Call={step1Call} step1Loading={step1Loading} addMedicineCall={addMedicineCall} medicineLoading={medicineLoading} addReportCall={addReportCall} reportLoading={reportLoading} firstTime={firstTime} setFirstTime={setFirstTime} addPaymentCall={addPaymentCall} paymentLoading={paymentLoading} />

    </>
  )
}

export default UpdatePatientDetails