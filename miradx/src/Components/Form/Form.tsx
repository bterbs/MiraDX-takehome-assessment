import React, { useState } from 'react';
import Step1 from '../StepOne/StepOne';
import Step2 from '../SignUpForm/StepTwo/StepTwo';
import './Form.css';
import validateStep1 from '../../utils';

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
    form: ''
  })
  const [step, setStep] = useState(1);
  const [showAddress, setShowAddress] = useState(false);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleAddressInputChange = (e:any) => {
    console.log('target ' + e.target.value)
    const { name, value } = e.target;
    setAddressData({...addressData, [name]: value});
  };

  const handleSubmit = (e:any) => {
      e.preventDefault();
      // Your custom submission logic here
    };


  const nextStep = (): void => {
    if (step === 1 && !validateStep1(formData.email, formData.password, setErrors)) return;
    setStep(step + 1);
  };

  const prevStep = (): void => setStep(step - 1);

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
          {step === 2 && <button type="submit">Submit</button>}
        </div>
      </div>
  );
};

export default Form;
