import React, { useState } from 'react';
import Step1 from '../StepOne/StepOne';
import Step2 from '../SignUpForm/StepTwo/StepTwo';
import './Form.css';
import { validateStep1, resetForms } from '../../utils';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: ''
  });
  const [addressData, setAddressData] = useState({
    street: '',
    city: '',
    state:'',
    zip: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    form: {
      message: ''
    }
  })
  const [step, setStep] = useState(1);
  const [showAddress, setShowAddress] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleAddressInputChange = (e:any) => {
    console.log('target ' + e.target.value)
    const { name, value } = e.target;
    setAddressData({...addressData, [name]: value});
  };

  const compiledFormData = {
    ...formData,
    address: addressData
  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(compiledFormData)
  };


  const handleSubmit = (e:any) => {
      // Process form data
      console.log('Form Submitted', compiledFormData);
      fetch('https://httpstat.us/random/200', requestOptions) // change 200 to 500 to mock error status
          .then(response => {
            if(response.ok){
              setSuccess(true)
            }
            return response
          })
          .catch(error => {
            setErrors({...errors, form: error})
          })
      // Reset forms
      console.log('Reset Forms')
      resetForms(setFormData, setShowAddress, setAddressData, setErrors, setSuccess)
    };


  const nextStep = (): void => {
    if (step === 1 && !validateStep1(formData.email, formData.password, setErrors)) return;
    setStep(step + 1);
  };

  const prevStep = (): void => {
    setStep(step - 1);
    setSuccess(false)
    resetForms(setFormData, setShowAddress, setAddressData, setErrors, setSuccess)
  }
  return (
      <div className="multi-step-form">
        {step === 1 && (
          <Step1
            email={formData.email}
            password={formData.password}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        )}
        {step === 2 && (
          <Step2
            firstName={formData.firstName}
            lastName={formData.lastName}
            dob={formData.dob}
            showAddress={showAddress}
            address={addressData}
            setShowAddress={setShowAddress}
            handleInputChange={handleInputChange}
            handleAddressInputChange={handleAddressInputChange}
          />
        )}
        <div className="navigation-buttons">
          {step > 1 && <button onClick={prevStep}>Previous</button>}
          {step < 2 && <button onClick={nextStep}>Next</button>}
          {step === 2 && <button type="submit" onClick={handleSubmit}>Submit</button>}
        </div>
        {errors.form && (
          <p className="error">{errors.form.message}</p>
        )}
        {success && (
          <p className="success">Form submitted successfully!</p>
        )}
      </div>
  );
};

export default Form;
