import React from 'react';
import styled from 'styled-components';
import img from '../../../react.svg'

const MyInfo = () => {
    return (
        <Main>
            <div>
           <img className='rotate' src={img} alt="" />
           </div>
        </Main>
    );
};

const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-width: 50vw;
min-height: 100vh;
background-color: white;

img{
    width: 1200%;
    background: transparent;
    top: 1%;
}
.rotate {
  animation: rotation 10s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

`
export default MyInfo;