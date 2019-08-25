import React from 'react';
import { Button } from 'reactstrap';

const Actions =()=>{
    return(
        <div className="action-btns">
            <Button outline color="secondary" size="sm">Login</Button>{' '}
            <Button color="danger" size="sm">Sign Up</Button>
        </div>
    )
}

export default Actions;