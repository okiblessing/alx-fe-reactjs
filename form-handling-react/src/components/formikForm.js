// src/components/formikForm.js
// src/components/formikForm.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  // Define the Yup validation schema using string().required()
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required'), // Username should be a required string
    email: Yup.string()
      .email('Invalid email address') // Check if the email format is valid
      .required('Email is required'),   // Email is a required string
    password: Yup.string()
      .required('Password is required') // Password should be a required string
      .min(6, 'Password must be at least 6 characters long'), // Ensure the password has at least 6 characters
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}  // Attach the Yup schema for validation
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {/* Username field */}
            <div>
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
              />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
