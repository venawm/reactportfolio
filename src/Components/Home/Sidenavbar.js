import React from 'react';
import styled from 'styled-components';
import './sidenavbar.scss'
const Sidenavbar = () => {
    return (
        <div className="sidenav">
            <a href=""><i class="fa-brands fa-github g fa-2xl"></i></a>
           <a href=""> <i class="fa-brands fa-instagram i fa-2xl"></i></a>
           <a href=""> <i class="fa-brands fa-linkedin l fa-2xl"></i></a>
           <a href=""> <i class="fa-brands fa-facebook f fa-2xl"></i></a>
           
        </div>
    );
};



export default Sidenavbar;