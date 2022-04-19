import React from 'react';
import styled from 'styled-components';
import MyInfo from './MyBasicInfo/MyInfo';
import MyinfoBlack from './MyBasicInfo/MyinfoBlacl';

const Home = () => {
    return (
        <Main>
        <div className="text"> <h3>Hi my name is</h3>
            <h1><span>Samir</span> <span>Pandey</span></h1>
            <h1>I am a <span>React</span><span>Developer</span></h1>
            <p>I am a Web-Developer specializing in React.Js</p>
            <button>Contact Me</button>
        </div>
        <div className="infos">
        <MyInfo/>
        <MyinfoBlack/>
        </div>
        
        </Main>
    );
};

const Main = styled.div`
display: flex;
flex-direction: row;
.text{
    text-align: center;
    position: absolute;
    left: 41.30%;
    top: 30%;
}
button{
    align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 55px;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover{
   background-color: #000000a6;;
   color: white;

  }
    
}
.infos{
    display: flex;
}

`
export default Home;