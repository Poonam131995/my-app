import React from 'react';
import Subscribers from './InnerComponents/Subscribers.Component.js'
const Voting=()=>{
    return(
        <div className="voting-section">
            <Subscribers subscribercount={300} ></Subscribers>
        </div>
    );
}
export default Voting;