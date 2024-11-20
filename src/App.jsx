import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  const [message, setMessage] = useState({
    error: false,
    msg: "",
    color: "",
  });

  const setAlert = (newAlert) => {
    setMessage(newAlert);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {/* Cambia entre <Register /> o <Login /> según sea necesario */}
        <Register message={message} setAlert={setAlert} />
        {/* <Login message={message} setAlert={setAlert} /> */}
      </div>
      <footer className="text-center mt-5 bg-dark text-white py-3">
        © 2025 - Pizzería Mamma Mía - Todos los derechos reservados Catherine Solarte
      </footer>
      
    </div>
  );
}

export default App;
