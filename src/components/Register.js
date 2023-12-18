// Import the correct component name
import React, { useState } from 'react';
import '../App.css';
import './Register.css'; // Import the custom CSS file
import Button from 'react-bootstrap/Button';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your registration logic here, e.g., send the data to a server
    console.log('Name:', name);
    console.log('Email:', email);

    // Clear the form fields after submission
    setName('');
    setEmail('');
  };

  return (
    <section className="register-section">
      <h2>Register</h2>
      <p>Sign up to join our community and receive updates about our events.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <Button variant="primary" size="lg" onClick={handleSubmit}>
      Register
    </Button>
      </form>
    </section>
  );
};

export default Register;
