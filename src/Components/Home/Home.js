import React from 'react';
import styled from 'styled-components';
import MyInfo from './MyBasicInfo/MyInfo';
import './home.scss'
import MyinfoBlack from './MyBasicInfo/MyinfoBlacl';

const Home = () => {
    return (
        
        <div className="home">

        <div className="infos">
        <MyInfo/>
        <MyinfoBlack/>
        </div>
        
        </div>
    );
};
export default Home;