import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Projectpage() {

  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => alert("Error Found", err));
  }, [id]);
  return (
    <div>
      <div
        style={{
          border: "2px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
          margin: "30px 0",
          maxWidth: "400px",
          minHeight: "300px",
          textAlign: "center",
        }}
      >
        <h1>{data.title}</h1>
        <img src={data.image} alt={data.title} height={150} width={150} />
        <p>{data.description}</p>
        <h4>Price: ${data.price}</h4>
        <b>Category: {data.category}</b>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Projectpage
