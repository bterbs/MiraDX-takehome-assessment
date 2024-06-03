import React from 'react';
import { StepOneProps } from '../../types';

const StepOne = ({ email, password, success, errors, handleInputChange }: StepOneProps) => {
  return (
    <div>
        {success && (
          <p className="success">Form submitted successfully!</p>
        )}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
    </div>
  );
};

export default StepOne;