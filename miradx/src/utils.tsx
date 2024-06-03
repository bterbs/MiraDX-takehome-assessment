
import { FormData } from "./types";

export function validateStepOne(email:string, password:string, setErrors: Function) {
    const newErrors: { email?: string; password?: string } = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[\W_])[a-zA-Z0-9\W_]{8,}$/; // at least 1 number, at least 1 symbol, min 8 chars

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!passwordRegex.test(password) || password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long and include at least one number and one symbol';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

export function resetForms(setFormData: Function, setShowAddress: Function, setAddressData: Function, setErrors: Function, setSuccess: Function){
  setFormData({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: ''
  });
  setShowAddress(false);
  setAddressData({
    street: '',
    city: '',
    state:'',
    zip: ''
  });
  setErrors({
    email: '',
    password: '',
    form: {
      message: ''
    }
  })
  setSuccess(false);
}

export function requiredInputsFilled(formData: FormData){
    const { firstName, lastName, dob } = formData;
    return (firstName.length === 0 || lastName.length === 0 || dob.length === 0) ? false : true;
}