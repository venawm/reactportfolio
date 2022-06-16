import React from "react";

import Home from "./Components/Home/Home";
import Sidenavbar from "./Components/Home/Sidenavbar";
import Navbar from "./Components/Nav/Navbar";
function App() {
  return (
    <div className="name">
      <Navbar/>
      <div className="Home">
      <Sidenavbar/>
      <Home/>
      </div>
    </div>
 
    
  );
}


export default App;
