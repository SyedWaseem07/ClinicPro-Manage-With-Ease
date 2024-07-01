import React, { useEffect, useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";

let diseases = [];
const Form = ({ formData, setFormData, fromUpdatePatient, setFlag, medicine, setMedicine, report, setReport, payment, setPayment }) => {
  const [showSymptoms, setShowSymptoms] = useState('');
  const [step1Submit, setStep1Submit] = useState(false);
  const [step2Submit, setStep2Submit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.symptoms !== '') diseases.push(formData.symptoms.toLowerCase())
    let symp = diseases.join(",")
    setFormData({ ...formData, "symptoms": symp })
    setStep1Submit(true);
    setFlag(prev => !prev)

  };
  const handleChange = (e) => {
    if (e.target.name === "symptoms") setFormData({ ...formData, "symptoms": e.target.value })
    else setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const addSymptoms = (oneSymptom) => {
    if (diseases.includes(oneSymptom.toLowerCase())) {
      alert('symptom already added');
      return
    }
    diseases.push(oneSymptom.toLowerCase());
    // console.log([...diseases])
    // setFormData({ ...formData, "symptoms": [...diseases] + ', ' })
    document.getElementById('sympIpFeild').value = ''
    let str = ''
    diseases.forEach(item => str += item + ' ');
    setShowSymptoms(str);
  }
  const addSymptomPlus = () => {
    if (formData.symptoms === '') alert('Cant add empty symptom');
    else if (formData.symptoms.length < 2) alert('Provide valid symptom name');
    else if (diseases.includes(formData.symptoms.toLowerCase())) alert('symptom already added');
    else diseases.push(formData.symptoms.toLowerCase());
    let str = ''
    diseases.forEach(item => str += item + ' ');
    setShowSymptoms(str);
  }


  const handleMedicine = (e) => {
    e.preventDefault();
    setMedicine({ ...medicine, "patient_name": formData.patient_name })
    setStep2Submit(true);
    setStep1Submit(true)
    setFlag(prev => !prev)
  }

  const handleReport = (e) => {
    e.preventDefault();
    setReport({ ...report, "patient_name": formData.patient_name })
    setStep2Submit(true)
    setStep1Submit(true);
    setFlag(true)
  }

  const handlePayment = (e) => {
    e.preventDefault();
    setPayment({ ...payment, "patient_name": formData.patient_name })
    setFlag(true)
  }
  return (
    <div className='lg:w-[70%] mx-auto px-5 md:px-0 w-[100%] mt-7 font-semibold'>
      {fromUpdatePatient ? <h3 className='my-2 text-2xl font-bold text-neutral-content text-center'>Update Patient Details</h3> : <h3 className='my-2 text-2xl font-bold text-neutral-content text-center'>Add Patient Details</h3>}

      <div className="collapse collapse-plus bg-neutral text-neutral-content mt-4">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">Step-1 {fromUpdatePatient ? "Update" : "Add"} Identity Details</div>
        <div className="collapse-content">
          <form className='flex flex-col gap-4 text-neutral-content py-8 px-14 ' onSubmit={handleSubmit}>
            <div className='flex flex-col lg:flex-row justify-evenly flex-wrap gap-4'>
              <div className='flex flex-col gap-4 mt-4 lg:mt-0'>
                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='text'
                    className='grow'
                    placeholder='patient name'
                    name='patient_name'
                    value={formData.patient_name}
                    onChange={handleChange}
                  />
                </label>

                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='tel'
                    className='grow'
                    placeholder='mobile'
                    name='mobile_no'
                    value={formData.mobile_no}
                    onChange={handleChange}
                  />
                </label>

                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='number'
                    className='grow'
                    placeholder='age'
                    value={formData.age === 0 ? "" : formData.age}
                    name='age'
                    onChange={handleChange}
                  />
                </label>

              </div>

              <div className='flex flex-col gap-4 mt-4 lg:mt-0'>
                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='number'
                    className='grow'
                    placeholder='weight'
                    name='weight'
                    value={formData.weight === 0 ? "" : formData.weight}
                    onChange={handleChange}
                  />
                </label>
                <label className='input input-bordered rounded flex items-center gap-4'>
                  <div className='flex items-center gap-2'>
                    <input
                      type='radio'
                      className='grow'
                      name='gender'
                      value="Male"
                      onChange={handleChange}
                      id='genderM'
                    />
                    <label htmlFor='genderM' className='text-neutral-400'>Male</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input
                      type='radio'
                      className='grow'
                      name='gender'
                      value="Female"
                      onChange={handleChange}
                      id='genderF'
                    />
                    <label htmlFor='genderF' className='text-neutral-400'>Female</label>
                  </div>
                </label>

                <label className='input input-bordered rounded flex items-center gap-2'>
                  <input
                    type='date'
                    className='grow text-neutral-400'
                    name='last_visited'
                    onChange={handleChange}
                    value={formData.last_visited}
                  />
                </label>
              </div>

              <div className='flex flex-col gap-4 mt-4 lg:mt-0'>
                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='text'
                    className='grow'
                    placeholder='symptoms'
                    name='symptoms'
                    id='sympIpFeild'
                    value={formData.symptoms}
                    onChange={handleChange}
                  />
                  <FaPlusCircle className='cursor-pointer' size={18} onClick={addSymptomPlus} />
                </label>
                <div className='flex gap-2 max-w-64 flex-wrap justify-center mx-auto'>
                  <div className="badge badge-warning cursor-pointer" onClick={() => addSymptoms('Fever')}>Fever</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => addSymptoms('Cold')}>Cold</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => addSymptoms('Dehydration')}>Dehydration</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => addSymptoms('Headache')}>Headache</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => addSymptoms('Sore_Throat')}>Sore Throat</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => addSymptoms('Fatigue')}>Fatigue</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => addSymptoms('Nausea')}>Nausea</div>
                </div>
                {showSymptoms.length > 0 ? <p className='lg:w-64 md:w-96 mx-auto'>{showSymptoms}</p> : <></>}
              </div>

            </div>
            <button className='btn rounded-full btn-primary text-primary-content font-semibold text-[1.2rem] w-52 mx-auto mt-4 py-1'>{fromUpdatePatient ? "Update" : "Add"}</button>
          </form>
        </div>
      </div>


      <div className="collapse collapse-plus bg-neutral my-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Step-2 Add Prescriptions</div>
        <div className="collapse-content">
          {step1Submit ? <h3 className='text-neutral-content font-semibold text-center'>Prescriptions of patient <span className='border-2 border-warning px-4 py-1'>{formData.patient_name}</span></h3> : <h3 className='text-neutral-content font-semibold text-center'>Please fill step-1 first</h3>}
          {/* <form  onSubmit={handleStep2}> */}
          {(step1Submit || fromUpdatePatient) ? <div className={`flex flex-col gap-4 text-neutral-content py-8 px-14  md:flex-row justify-evenly`}>
            <form className='flex flex-col gap-4 text-neutral-content' onSubmit={handleMedicine}>
              <div className='flex flex-col gap-4'>
                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='text'
                    className='grow'
                    id='medIpFeild'
                    placeholder='medicine'
                    name='medicine'
                    value={medicine.medicine_name}
                    disabled={formData.patient_name === ''}
                    onChange={(e) => setMedicine({ ...medicine, "medicine_name": e.target.value })}
                  />
                </label>
                <div className='flex gap-2 max-w-64 flex-wrap justify-center mx-auto'>
                  <div className="badge badge-warning cursor-pointer" onClick={() => setMedicine({ ...medicine, "medicine_name": "Rantak" })}>Rantak</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => setMedicine({ ...medicine, "medicine_name": "Chrocine" })}>Chrocine</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => setMedicine({ ...medicine, "medicine_name": "Levocet" })}>Levocet</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => setMedicine({ ...medicine, "medicine_name": "Omid" })}>Omid</div>
                </div>
                <select className="select w-full text-neutral-400"
                  onChange={(e) => setMedicine({ ...medicine, "dosage": e.target.value })}>
                  <option disabled selected>Select dosage</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Night">Night</option>
                </select>
              </div>
              <button className="btn rounded-full btn-primary text-primary-content font-semibold text-[1.2rem] w-52 mx-auto mt-4 py-1">{fromUpdatePatient ? "Update" : "Add Medicine"}</button>
            </form>
            <div className="divider lg:divider-horizontal"></div>
            <form className='flex flex-col gap-4 text-neutral-content' onSubmit={handleReport}>
              <div className='flex flex-col gap-4'>
                <label className='input input-bordered rounded flex items-center gap-1'>
                  <input
                    type='text'
                    className='grow'
                    placeholder='report name'
                    name='patient_name'
                    value={report.report_name}
                    onChange={(e) => setReport({ ...report, "report_name": e.target.value })}
                  />
                </label>
                <div className='flex gap-2 max-w-64 flex-wrap justify-center mx-auto'>
                  <div className="badge badge-warning cursor-pointer" onClick={() => setReport({ ...report, "report_name": "Sugar" })}>Sugar</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => setReport({ ...report, "report_name": "Blood" })}>Blood</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => setReport({ ...report, "report_name": "Diabetes" })}>Diabetes</div>
                  <div className="badge badge-warning cursor-pointer" onClick={() => setReport({ ...report, "report_name": "Thyroid" })}>Thyroid</div>
                </div>

                <label className='input input-bordered rounded flex items-center gap-4 text-center text-neutral-400'>
                  <span>Select Report</span>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-warning w-full max-w-xs hidden"
                    onChange={(e) => setReport({ ...report, "reportFile": e.target.files[0] })}
                  />
                  <FaPlusCircle className='cursor-pointer' size={18} />
                </label>
                <button className="btn rounded-full btn-primary text-primary-content font-semibold text-[1.2rem] w-52 mx-auto mt-4 py-1">Add Report</button>

              </div>
            </form>
          </div> : <></>}


          {/* </form> */}
        </div>
      </div>


      <div className="collapse collapse-plus bg-neutral mb-10">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Step-3 Add Payment Details</div>
        <div className="collapse-content">
          {(step1Submit || step2Submit) ? <h3 className='text-neutral-content font-semibold text-center'>Prescriptions of patient <span className='border-2 border-warning px-4 py-1'>{formData.patient_name}</span></h3> : <h3 className='text-neutral-content font-semibold text-center'>Please fill above steps first</h3>}
          {(step1Submit || step2Submit) ? <form className='flex flex-col gap-4 text-neutral-content py-8 px-14 w-[80%] md:w-[50%] mx-auto' onSubmit={handlePayment}>
            <label className='input input-bordered rounded flex items-center gap-2'>
              <input
                type='number'
                className='grow'
                placeholder='amount'
                name='amount'
                value={payment.amount}
                onChange={(e) => setPayment({ ...payment, "amount": e.target.value })}
              />
            </label>

            <label className='input input-bordered rounded flex items-center gap-2'>
              <input
                type='Date'
                className='grow'
                placeholder='payment date'
                name='amtDate'
                value={payment.date}
                onChange={(e) => setPayment({ ...payment, "date": e.target.value })}
              />
            </label>
            <button className='btn rounded-full btn-primary text-primary-content font-semibold text-[1.2rem]'>Add</button>
          </form> : <></>}
        </div>
      </div>
    </div>
  )
}

export default Form