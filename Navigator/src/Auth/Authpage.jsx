import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Authpage() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handlSubmit = (e) => {
    e.preventDefault();

    let userdata = {
      email,password
    } 
    axios
      .post("https://reqres.in/api/login", userdata)
      .then((response) => {
        const data = response.data;
        alert("User login.....")
        localStorage.setItem("token",data.token)
        setEmail("");
        setpassword("");
      })
      .catch((error) => {
        console.log("There was an error logging in!", error);
      });
  };
  
  return (
    <div>
      <Form
        style={{ width: "500px", margin: "auto", height: "auto" }}
        onSubmit={handlSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>
    </div>
  );
}

export default Authpage;
