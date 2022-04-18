import React from 'react';
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Main>
            <h1>S</h1>
            <div className="navelements">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact Me</a></li>
                    <li><a href="#">About Me</a></li>
                </ul>
            </div>
            
        </Main>
    );
};

const Main =  styled.div`
min-height: 5vw;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #212529;
  margin-top: -9px;
  margin-left: -9px;
  margin-right: -9px;
  color: white;
a{
    text-decoration: none;
    color: white;
}
.navelements{
    ul{
        
        
        display: flex;
        list-style: none;
      
        justify-content: center;
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 2rem;
            height: 3rem;
            width: 5rem;
            border-top-left-radius: 20%;
            border-bottom-right-radius:20% ;
            border-bottom-left-radius:20% ;
            border-top-right-radius:20% ;
            transition-duration: 1s;

            
            :hover{
                background-color: #00ffbb;
                
            }
        }

        
    }
}


`

export default Navbar;