import React,{useState} from "react";
import from "./SignUp.css";
import axios from "axios";

function SignUp({setCurrentPage}){
  const [userName, setUserName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const details = { username: userName, email: userEmail, password: userPassword };
    try {
      await axios.post('http://localhost:8080/signup', details)
    } catch (error) {
      console.log(error)
      alert("Error in Registering")
    }
  };

  return(
    <div className="main-container">
      <h2>Register page</h2>

      <div className="form-container sign-up-page">
        <form onSubmit={handleSubmit} className="row">
          <div className="col">
            <label>Username</label>
            <input type="text" onChange={(e)=>setUserName(e.target.value)} required />
          </div>
          <div className="col">
            <label>Email</label>
            <input type="email" onChange={(e)=>setuserEmail(e.target.value)} required />
          </div>
          <div className="col">
            <label>Password</label>
            <input type="password" onChange={(e)=>setuserPassword(e.target.value)} required />
          </div>
          <div className="submit-btn">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
