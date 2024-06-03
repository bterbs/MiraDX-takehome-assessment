import React, { useState } from 'react';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../SignUpForm/StepTwo/StepTwo';
import './Form.css';
import { validateStepOne, resetForms, requiredInputsFilled } from '../../utils';

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
      // Process form data if required inputs filled
      if(requiredInputsFilled(formData)){
        fetch('https://httpstat.us/random/200', requestOptions) // change 200 to 500 to mock error status
        .then(response => {
          if(response.ok){
            setStep(1)
            setSuccess(true)
          }
          return response
        })
        .catch(error => {
          setErrors({...errors, form: error})
        })
        // Reset forms
        resetForms(setFormData, setShowAddress, setAddressData, setErrors, setSuccess)
      } else {
        // throw error about required inputs
        setErrors({...errors, form: { message: 'Please fill out required fields.' }})
      }
    };


  const nextStep = (): void => {
    if (step === 1 && !validateStepOne(formData.email, formData.password, setErrors)) return;
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
          <StepOne
            email={formData.email}
            password={formData.password}
            success={success}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        )}
        {step === 2 && (
          <StepTwo
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
      </div>
  );
};

export default Form;
