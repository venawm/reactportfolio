import React from "react";
import styled from "styled-components";
import Home from "./Components/Home/Home";
import Sidenavbar from "./Components/Home/Sidenavbar";
import Navbar from "./Components/Nav/Navbar";
function App() {
  return (
    <Main>
      <Navbar/>
      <div className="Home">
      <Sidenavbar/>
      <Home/>
      </div>
 
    </Main>
  );
}

const Main = styled.div`
padding: 0%;
margin: 0%;
box-sizing: border-box;
overflow: hidden;
.Home{
  display: flex;
  flex-direction: row;
  
}



`

export default App;
