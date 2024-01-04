import React, { useState } from 'react';  
import axios from 'axios';

function Register() {  
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: ''
    
  });

  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setFormData({ 
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', formData);
      
      setError(null);  
      console.log(response.data);
      window.location.href = '/login'; 


      // redirect or display message on success
      
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="form-container">
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          placeholder="First Name"
          name="first_name"
          value={formData.firstName}
          onChange={handleInputChange} 
        />
       
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange} 
        />
       
        <input
          type="password"
          placeholder="Password"
          name="password"  
          value={formData.password}
          onChange={handleInputChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;