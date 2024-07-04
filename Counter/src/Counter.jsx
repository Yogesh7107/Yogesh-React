import { useState } from "react";

function Counter(){
   
    const [count, setCount] = useState(0);
   
    const handleIncrement = () => {
        setCount(count + 1);
      };
      const handleDecrement = () => {
        setCount(count - 1);
      };
      const handleReset = () => {
        setCount(0);
      };
      const isPrime = num => {
        for(let i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }
      return (
        <div style={{marginTop:'20px',textAlign:"center",backgroundColor:"#FFE7BF",width:"700px",height:"500px",border:"2px solid black"}}>
          <h1 style={{color:"#A10035",fontWeight:"bold"}}>Welcome to Counter 2.0 😎</h1>
         <div style={{marginTop:'50px'}}>
         <div className="buttons">
            <button disabled={count==0} onClick={handleDecrement} style={{backgroundColor:"#FFC4C4",fontSize:"25px"}}>-1</button>
            <button style={{backgroundColor:"#FFC4C4",fontSize:"25px",marginLeft:'10px',marginBottom:"10px"}}  onClick={handleIncrement}>+1</button>
          </div>
          <button style={{backgroundColor:"#FFC4C4",fontSize:"25px"}} onClick={handleReset}>Reset Count</button>
          <h2 style={{color:"#A10035",fontWeight:"bold",fontSize:'35px'}}>Count: <span style={{color:"#F94E65"}}>{count}</span></h2>
          <p style={{color:"#A10035",fontWeight:"bold",fontSize:"30px"}}>This Number is: <span style={{color:"#F94E65"}}> {count % 2 === 0 ? "Even 😎" : "Odd 🥹"}</span></p>
          <p style={{color:"#A10035",fontWeight:"bold",fontSize:"30px"}}>Prime Number: <span style={{color:"#F94E65"}} > {isPrime(count) ? "true 😎" : "false 🥹"}</span></p>
         </div>
        </div>
      );
    }
    
export default Counter;