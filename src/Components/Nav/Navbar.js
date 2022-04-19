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
h1{
    margin-left: 4rem;
}
min-height: 5vw;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #f1f1f1;
  margin-top: -9px;
  margin-left: -9px;
  margin-right: -9px;
  color: black;
a{
    text-decoration: none;
    color: black;
}
.navelements{
    margin-right: 4rem;
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
            border-radius: 10%;
        
            transition-duration: 1s;

            
            :hover{
                background-color:black;
                a{
                    color: white;
                }
                
            }
        }

        
    }
}


`

export default Navbar;