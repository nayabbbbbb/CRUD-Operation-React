import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

function EditUser() {
  const navigate = useNavigate();
  const { index } = useParams();
  const { userArray, updateUser } = useUserContext();
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    setInputData(userArray[index] || {});
  }, [index, userArray]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { firstName: '', lastName: '', email: '', password: '' };

    // Validate firstName
    if (inputData.firstName.trim().length < 3) {
      newErrors.firstName = 'First name must be at least 3 characters';
      isValid = false;
    }

    // Validate lastName
    if (inputData.lastName.trim().length < 3) {
      newErrors.lastName = 'Last name must be at least 3 characters';
      isValid = false;
    }

    // Validate email (you can add a more complex email validation logic if needed)
    if (!inputData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate password
    if (inputData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const updateInfo = () => {
    if (validateForm()) {
      updateUser(index, inputData);
      navigate('/list');
    }
  };

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear the validation error when user types
  };

  return (
    <div>
      <h1>Edit User Information</h1>
      <label>FirstName</label>
      <input
        type="text"
        value={inputData.firstName}
        name="firstName"
        placeholder="Enter firstName"
        onChange={handleInputChange}
      />
      <div className="error">{errors.firstName}</div>

      <label>LastName</label>
      <input
        type="text"
        value={inputData.lastName}
        name="lastName"
        placeholder="Enter lastName"
        onChange={handleInputChange}
      />
      <div className="error">{errors.lastName}</div>

      <label>Email</label>
      <input
        type="email"
        value={inputData.email}
        name="email"
        placeholder="Enter your Email"
        onChange={handleInputChange}
      />
      <div className="error">{errors.email}</div>

      <label>Password</label>
      <input
        type="password"
        value={inputData.password}
        name="password"
        placeholder="Secure your data"
        onChange={handleInputChange}
      />
      <div className="error">{errors.password}</div>

      <button onClick={updateInfo}>Edit User</button>
    </div>
  );
}

export default EditUser;
