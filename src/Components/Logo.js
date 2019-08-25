import React from 'react';
import Profile from './Images/Profile.jpg';
import { Link } from 'react-router-dom';

const Logo = () => (
       <Link to="/" className="logo-pos-one"><img src={Profile} alt="test"/></Link> 
);

export default Logo;