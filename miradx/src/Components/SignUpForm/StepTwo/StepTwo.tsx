// src/Step2.js
import React from 'react';
import { Address } from '../../../constants';

type StepTwoProps = {
  firstName: string,
  lastName: string,
  dob: string,
  showAddress: boolean,
  address: Address,
  setShowAddress: Function,
  handleInputChange: React.ChangeEventHandler,
  handleAddressInputChange: React.ChangeEventHandler
}

const StepTwo = ({ firstName, lastName, dob, showAddress, address, setShowAddress, handleInputChange, handleAddressInputChange }: StepTwoProps) => {
  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={dob}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="showAddress">Include Address:</label>
        <input
          type="checkbox"
          id="showAddress"
          name="showAddress"
          checked={showAddress}
          onChange={() => setShowAddress(!showAddress)}
        />
      </div>
      {showAddress && (
        <div className="address">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={address.street}
            onChange={handleAddressInputChange}
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={address.city}
            onChange={handleAddressInputChange}
          />
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={address.state}
            onChange={handleAddressInputChange}
          />
          <label htmlFor="zip">Zip Code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={address.zip}
            onChange={handleAddressInputChange}
          />
        </div>
      )}
    </div>
  );
};

export default StepTwo;