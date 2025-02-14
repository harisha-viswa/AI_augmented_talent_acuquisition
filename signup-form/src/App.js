import React from "react";
import Signup from "./components/Signup/signup";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />  {/* Add the Navbar at the top */}
      <Signup />  {/* Ensure this is being rendered */}
    </div>
  );
}

export default App;
