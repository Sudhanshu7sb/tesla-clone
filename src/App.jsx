import React from "react";
import HomePage from "./components/HomePage";
// import CarDetails from "./components/CarDetails";
import CarDetails from "./components/pages/CarDetails"
import NotFound from "./components/NotFound";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import data from "./components/carInfo";

function App() {
  return (
    <main>
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePage />}></Route>
  <Route path="/models" element={<CarDetails car={data.filter(car => car.route == "models")}/>}></Route>
  <Route path="/model3" element={<CarDetails car={data.filter(car => car.route == "model3")}/>}></Route>
  <Route path="/modelx" element={<CarDetails car={data.filter(car => car.route == "modelx")}/>}></Route>
  <Route path="/modely" element={<CarDetails car={data.filter(car => car.route == "modely")}/>}></Route>
  <Route path="/solarroof" element={<CarDetails car={data.filter(car => car.route == "solarroof")}/>}></Route>
  <Route path="/solarpanel" element={<CarDetails car={data.filter(car => car.route == "solarpanel")}/>}></Route>
  <Route path="/*" element={<NotFound />}></Route>

  </Routes>
  </BrowserRouter>
    </main>
  );
}

export default App;
