import { useState } from "react";
// import "./styles.css";

const INTIALIZE = {
  name: "",
  email: "",
  pass: "",
  zender: "",
  Level: "",
};

function StudentForm(e) {
  const [formData, setFormData] = useState(INTIALIZE);

  const { name, email, pass, Level,  zender } = formData;

  function handleclick(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
   <div className="main" style={{textAlign:"center",marginTop:"10%"}}>
    <h1>Student Form</h1>
     <form action="" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={name}
        onChange={handleclick}
        placeholder="Enter your name"
        name="name"
        className="name"
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleclick}
        placeholder="enter your email"
        className="email"
      />
      <br />
      <br />
      <input
        type="password"
        name="pass"
        value={pass}
        onChange={handleclick}
        placeholder="enter your Password"
        className="password"
      />
      <br />
      <br />
      <select value={Level} onChange={handleclick} name="Level" id="" className="option">
        <option value="Freshman">Freshman</option>
        <option value="Freshman">Sophomore</option>
        <option value="Sophomore">Junior</option>
        <option value="Senior">Senior</option>
        
      </select>
      <br />
      <br />
      MALE{" "}
      
      <input className="gender" type="radio" name="zender" value={"Male"} onChange={handleclick} />
      Female{" "}
      <input
        type="radio"
        value={"Female"}
        onChange={handleclick}
        name="zender"
      />
    Other{" "}
    <input type="radio" name="zender" value={"Other"} onChange={handleclick}/>

     
      <br />
      <br />
      <input className="submit" type="submit" />
    </form>
   </div>
  );
}

export default StudentForm;
