import React, { useEffect, useState } from 'react'
import Form from '../../components/Form';
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const AddPatientDetails = () => {
  const [formData, setFormData] = useState({
    "patient_name": "",
    "mobile_no": "",
    "age": 0,
    "weight": 0,
    "gender": "",
    "symptoms": "",
    "last_visited": ""
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

  const { name } = useParams();
  const [step1Submit, setStep1Submit] = useState(false);
  const [step2Submit, setStep2Submit] = useState(false);
  const queryClient = useQueryClient();
  const { data: allAppointments, isSuccess: allAppSuccess, refetch, isRefetchError: allReftchError } = useQuery({
    queryKey: ['allAppointments'],
    queryFn: async () => {
      try {
        const res = await axios.get('/api/v1/users/appointments');
        return res.data.data;
      } catch (error) {
        toast.error("unable to fetch Todays Appointments")
        return [];
      }
    }
  })
  useEffect(() => {
    if (name && allAppSuccess && allAppointments && allAppointments.length > 0) {
      let appPatientDetails = allAppointments.filter(app => app.patient_name === name);
      if (appPatientDetails.length > 0) {
        setFormData({
          "patient_name": appPatientDetails[0].patient_name,
          "mobile_no": appPatientDetails[0].mobile_no,
          "age": appPatientDetails[0].age,
          "weight": 0,
          "gender": appPatientDetails[0].gender,
          "symptoms": "",
          "last_visited": appPatientDetails[0].date_of_app
        })
      }

    }
  }, [])

  const { mutate: step1Call, isPending: step1Loading } = useMutation({
    mutationFn: async (formData) => {
      try {
        const res = await axios.post('/api/v1/users/receptionist/addPatientDetails', { ...formData });
        return res.data.data;
      } catch (error) {
        const index = error.response.data.indexOf("<pre>")
        const Lastindex = error.response.data.indexOf("<br>")
        const errMsg = error.response.data.substring(index + 5, Lastindex);
        throw new Error(errMsg);
      }
    },
    onSuccess: (data) => {
      toast.success("Step-1 completed successfully");
      queryClient.invalidateQueries({ queryKey: ['allPatients'] });
      setStep1Submit(true);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  const { mutate: addMedicineCall, isPending: medicineLoading } = useMutation({
    mutationFn: async (medicine) => {
      try {
        const res = await axios.post('/api/v1/users/receptionist/addMedicine', { ...medicine });
        return res.data.data;
      } catch (error) {
        const index = error.response.data.indexOf("<pre>")
        const Lastindex = error.response.data.indexOf("<br>")
        const errMsg = error.response.data.substring(index + 5, Lastindex);
        throw new Error(errMsg);
      }
    },
    onSuccess: (data) => {
      toast.success("Medcine added successfully");
      queryClient.invalidateQueries({ queryKey: ['allPatients'] });
      setStep2Submit(true);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  const { mutate: addReportCall, isPending: reportLoading } = useMutation({
    mutationFn: async (report) => {
      try {
        const res = await axios.post('/api/v1/users/receptionist/addReport', report);
        return res.data.data;
      } catch (error) {
        const index = error.response.data.indexOf("<pre>")
        const Lastindex = error.response.data.indexOf("<br>")
        const errMsg = error.response.data.substring(index + 5, Lastindex);
        throw new Error(errMsg);
      }
    },
    onSuccess: (data) => {
      toast.success("Report added successfully");
      queryClient.invalidateQueries({ queryKey: ['allPatients'] })
      setStep2Submit(true);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  const { mutate: addPaymentCall, isPending: paymentLoading } = useMutation({
    mutationFn: async (payment) => {
      try {
        const res = await axios.post('/api/v1/users/receptionist/addPaymentDetails', payment);
        return res.data.data;
      } catch (error) {
        const index = error.response.data.indexOf("<pre>")
        const Lastindex = error.response.data.indexOf("<br>")
        const errMsg = error.response.data.substring(index + 5, Lastindex);
        throw new Error(errMsg);
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
    <Form formData={formData} setFormData={setFormData} medicine={medicine} setMedicine={setMedicine} report={report} setReport={setReport} payment={payment} setPayment={setPayment} step1Call={step1Call} step1Loading={step1Loading} addMedicineCall={addMedicineCall} medicineLoading={medicineLoading} addReportCall={addReportCall} reportLoading={reportLoading} addPaymentCall={addPaymentCall} paymentLoading={paymentLoading} step1Submit={step1Submit} setStep1Submit={setStep1Submit} step2Submit={step2Submit} setStep2Submit={setStep2Submit} />
  )
}

export default AddPatientDetails