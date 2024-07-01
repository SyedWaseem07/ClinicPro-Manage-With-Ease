import React, { useEffect, useState } from 'react'
import Form from '../../components/Form';

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
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log(formData, medicine, report, payment);
  }, [flag])
  return (
    <Form formData={formData} setFormData={setFormData} medicine={medicine} setMedicine={setMedicine} report={report} setReport={setReport} payment={payment} setPayment={setPayment} setFlag={setFlag} />
  )
}

export default AddPatientDetails