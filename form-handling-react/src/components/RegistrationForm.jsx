// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  // State object to store form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State object to store form errors
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the field in formData
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: check for empty fields
    let validationErrors = {};

    if (!formData.username) validationErrors.username = 'Username is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';

    // If validation errors exist, set them and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);

    // Clear the form after submission
    setFormData({ username: '', email: '', password: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Username Field */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}  // Explicitly link input value to formData.username
          onChange={handleChange}    // Update formData on input change
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}  // Explicitly link input value to formData.email
          onChange={handleChange}  // Update formData on input change
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}  // Explicitly link input value to formData.password
          onChange={handleChange}    // Update formData on input change
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
