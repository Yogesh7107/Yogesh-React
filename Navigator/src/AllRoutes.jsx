import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import Productpage from "./page/Productpage";
import Authpage from "./Auth/Authpage";
import Proute from "./assets/Proute";
import Projectpage from "./page/Projectpage";
import Aboutpage from "./page/Aboutpage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/product"
          element={
            <Proute>
              <Productpage />
            </Proute>
          }
        ></Route>
        <Route path="/login" element={<Authpage />}></Route>
        <Route path="/project/:id" element={<Projectpage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
