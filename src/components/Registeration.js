import React, { useState } from 'react';  
import axios from 'axios';
import { Link } from 'react-router-dom';


function Register() {  
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: ''
    
  });

  const [error, setError] = useState(null);
  const [mssg, setMssg] = useState('')

  const handleInputChange = (event) => {
    setFormData({ 
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const psswd = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
      setMssg("Invalid email format")
      document.getElementById('alert').style.display='block';


    }
    if(psswd.length < 8){
      setMssg("password should should be greater than 8")
      document.getElementById('alert').style.display='block';

    }
    
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

return(
  <>
         
         <body>
<style jsx>{`
    
 
*,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

}
body{
    background-color: #343483e8;
}
.background{
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
}
.background .shape{
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
}
.shape:first-child{
    background: linear-gradient(
        #1845ad,
        #23a2f6
    );
    left: -80px;
    top: -80px;
}
.shape:last-child{
    background: linear-gradient(
        to right,
        #ff512f,
        #f09819
    );
    right: -30px;
    bottom: -80px;
}
form{
   
    height: 620px;
    width: 800px;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
}
form *{
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
form h3{
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label{
    display: inline;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #e5e5e5;
}
button{
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
.social{
  margin-top: 30px;
  display: flex;
}
.social div{
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255,255,255,0.27);
  color: #eaf0fb;
  text-align: center;
}
.social div:hover{
  background-color: rgba(255,255,255,0.47);
}
.social .fb{
  margin-left: 25px;
}
.social i{
  margin-right: 4px;
}
.form-group{
display:flex;
}
.form-group input{
  margin:20px;
}
input{
  margin:20px;
}
#alert{
  display:none;
}
`}
</style>

<div className="alert alert-warning" role="alert" id="alert">
          {mssg}
        </div>
  
    <form onSubmit={handleSubmit}>
        <h3>Register Here</h3>
        <div className="form-group">
        <input name ="first_name" type="text" placeholder="First Name" id="first_name" value={formData.firstName} onChange={handleInputChange}/>

        <input name ="last_name" type="text" placeholder="Last Name" id="last_name" value={formData.lastName} onChange={handleInputChange}/>
</div>
        <input name ="username" type="text" placeholder="Username" id="username" value={formData.username} onChange={handleInputChange}/>

        <input name ="email" type="text" placeholder="Email" id="email" value={formData.email} onChange={handleInputChange}/>
<div className="form-group">
        <input name = "password" type={showPassword ? 'text' : 'password'} placeholder="Password" id="password" value={formData.password} onChange={handleInputChange}/>
        <span
          style={{ marginLeft: '0px', cursor: 'pointer', justifyItems:"center", alignItems:"center" }}
          onClick={handleTogglePassword}
        >
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </span>
        </div>
        <button type="submit">Register</button>
        <Link to="/login">Login?</Link>
    </form>
        </body>
  </>
)


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