
export default function validateStep1(email:string, password:string, setErrors: Function) {
    const newErrors: { email?: string; password?: string } = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[\W_])[a-zA-Z0-9\W_]{8,}$/;

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!passwordRegex.test(password) || password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long and include at least one number and one symbol';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };