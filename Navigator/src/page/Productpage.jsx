import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Projectpage from "./Projectpage";

function Productpage() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row className="" style={{ marginLeft: "7%", marginRight: "0px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          {data.map((e) => (
            <div
              key={e.id}
              style={{ border: "1px solid black", width: "300px" }}
            >
              <img
                src={e.image}
                alt=""
                height={200}
                width={200}
                style={{ marginLeft: "50px" }}
              />
              <h5 style={{ textAlign: "center" }}>{e.title}</h5>
              <h5 style={{ textAlign: "center" }}>${e.price}</h5>
              <p style={{ textAlign: "center" }}>{e.category}</p>
              <Link to={`/Project/${e.id}`}>Add</Link>
            </div>
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default Productpage;
