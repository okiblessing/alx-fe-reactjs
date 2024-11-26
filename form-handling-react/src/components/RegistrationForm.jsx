import { useState } from 'react';

const RegistrationForm = () => {
  // Update the state to include username, email, and password
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  // Handle change for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Username field */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}  // Correct value prop linked to formData.username
          onChange={handleChange}
        />
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}  // Correct value prop linked to formData.email
          onChange={handleChange}
        />
      </div>

      {/* Password field */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}  // Correct value prop linked to formData.password
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
