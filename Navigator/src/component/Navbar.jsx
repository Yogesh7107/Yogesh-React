import React from "react";
import { Button, Nav } from "react-bootstrap";
function Navbar() {

  const handlelogout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token");
    alert("User Logout.......");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-12"
            style={{ justifyContent: "space-between", display: "flex" }}
          >
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
            </Nav>
            <div style={{ display: "flex" }}>
              <Button href="/login" style={{ marginRight: "15px" }}>
                Login
              </Button>
              <Button variant="success" type="submit" onClick={handlelogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
