import React from "react";
import Navbar from "./components/Navbar"; // Importing Navbar
import Login from "./pages/Login"; // Importing Login page

function App() {
  return (
    <div>
      <Navbar /> {/* Ensure Navbar is being used */}
      <Login />
    </div>
  );
}

export default App;
