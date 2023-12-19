import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import PopUp from "../popup/PopUp"


const Login = () => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [email_id, setEmail_id] = useState();
  const [password, setPassword] = useState();


const navigate=useNavigate();

const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
    window.location.reload();
  };
  const handelsumbit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/login', { email_id, password });
      console.log(res.data);
      
      if (res.data.status) {
       
      openPopUp()
        //console.log(res.data);
      localStorage.setItem('token', JSON.stringify(res.data));
      navigate('/dashboard')
      }
      
    } catch (error) {
      toast.error('Something went wrong');

    }
  };

  return (
    <div className='home-1'>
      
        <h1>Login Form</h1>
        <label>Email</label>
        <input type="email" value={email_id} onChange={(e) => setEmail_id(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    
        <button onClick={handelsumbit}>Submit</button>
        <PopUp isOpen={isPopUpOpen} onClose={closePopUp}>
        <h2>Update sccessfully</h2>
        <p>Pop-Up content goes here.</p>
      </PopUp>
    </div>
  );
};

export default Login;
