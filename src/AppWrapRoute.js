import React from 'react';
import HeaderElement from './Header.js';
class AppWrapHeader extends React.Component{
    render=()=>{
        return(
            <>
            <HeaderElement></HeaderElement>
            {this.props.children}
            </>
        );
    }
}
export default AppWrapHeader;