import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import './Form.css';
import validateStep1 from '../../utils';
import { Address } from '../../constants';

const Form: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [showAddress, setShowAddress] = useState<boolean>(false);
  const [address, setAddress] = useState<Address>({ street: '', city: '', state: '', zip: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const nextStep = (): void => {
    if (step === 1 && !validateStep1(email, password, setErrors)) return;
    setStep(step + 1);
  };

  const prevStep = (): void => setStep(step - 1);

  return (
      <div className="multi-step-form">
        {step === 1 && (
          <Step1
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            errors={errors}
          />
        )}
        {step === 2 && (
          <Step2
            firstName={firstName}
            lastName={lastName}
            dob={dob}
            showAddress={showAddress}
            address={address}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setDob={setDob}
            setShowAddress={setShowAddress}
            setAddress={setAddress}
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
