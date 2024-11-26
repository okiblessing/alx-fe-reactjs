// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State to store error messages
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle input field changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the correct field
    }));
  };

  // Handle form submission with basic validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    // Simple validation: Check for empty fields
    if (!formData.username) validationErrors.username = 'Username
