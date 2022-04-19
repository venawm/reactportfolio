import React from 'react';
import styled from 'styled-components';

const Sidenavbar = () => {
    return (
        <Main>
            <a href=""><i class="fa-brands fa-github g fa-2xl"></i></a>
           <a href=""> <i class="fa-brands fa-instagram i fa-2xl"></i></a>
           <a href=""> <i class="fa-brands fa-linkedin l fa-2xl"></i></a>
           <a href=""> <i class="fa-brands fa-facebook f fa-2xl"></i></a>
           
        </Main>
    );
};

const Main = styled.div`
position: fixed;
display: flex;
flex-direction: column;
margin-top: 5rem;

width: 5vw;
margin-right: 2rem;
transition: 0.5s;
i{
    margin-bottom : 5rem;
    color: black;
    
}
.fa-instagram{
    
   :hover{
       color: #ff00bf;
   }
.f{
    
   :hover{
       color: #ff00bf;
   }
.fa-linkedin{
   
   :hover{
       color: blue;
   }
}
`

export default Sidenavbar;