// src/Step2.js
import React from 'react';

const Step2 = ({ firstName, lastName, dob, showAddress, address, setFirstName, setLastName, setDob, setShowAddress, setAddress }) => {
  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="showAddress">Include Address:</label>
        <input
          type="checkbox"
          id="showAddress"
          checked={showAddress}
          onChange={() => setShowAddress(!showAddress)}
        />
      </div>
      {showAddress && (
        <div class="address">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
          />
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
          />
          <label htmlFor="zip">Zip Code:</label>
          <input
            type="text"
            id="zip"
            value={address.zip}
            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
          />
        </div>
      )}
    </div>
  );
};

export default Step2;