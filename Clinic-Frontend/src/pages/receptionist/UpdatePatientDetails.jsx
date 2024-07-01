import React, { useState } from 'react'
import Form from '../../components/Form'

const UpdatePatientDetails = ({ patientData }) => {
  const [formData, setFormData] = useState({})
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
  return (
    <Form formData={formData} setFormData={setFormData} fromUpdatePatient={true} medicine={medicine} setMedicine={setMedicine} report={report} setReport={setReport} payment={payment} setPayment={setPayment} />
  )
}

export default UpdatePatientDetails