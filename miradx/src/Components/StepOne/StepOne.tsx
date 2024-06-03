// src/Step1.js
import React from 'react';

type StepOneProps = {
  email: string,
  password: string,
  errors: {
    email?: string,
    password?: string,
    form?: {
      message?: string
    }
  },
  handleInputChange: React.ChangeEventHandler
}

const StepOne = ({ email, password, errors, handleInputChange }: StepOneProps) => {
  return (
    <div>
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