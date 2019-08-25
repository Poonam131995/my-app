import React from 'react';
import Logo from './Components/Logo.js';
import Search from './Components/Search.js';
import Navigations from './Components/Navigation.js';
import Actions from './Components/ActionButtons.js';

class HeaderElement extends React.Component{
    render=()=>{
        return(
            <>
                <div className="header-top">
                    <div className="container-width">
                        <Logo></Logo>
                        <Search></Search>
                        <Navigations></Navigations>
                        <Actions></Actions>
                    </div>
                </div>
            </>
        );
    }
}

export default HeaderElement;