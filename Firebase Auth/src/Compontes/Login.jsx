import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebash';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = {
      email,
      password
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account Create Succesfully");
      })
      .catch((err) => alert(err.message))


  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
      <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
      <br />
      <button type="submit">Create</button>
    </form>
  )
}

export default Login
