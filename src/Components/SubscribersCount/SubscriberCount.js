import React from 'react';
import Profile from '../Images/Profile.jpg';
import Subscribers from '../InnerComponents/Subscribers.Component';

const SubscribersCount = ({ count = 600 }) => (
    <div className="content-subscription">
        <img src={Profile} alt="test"/>
        <img src={Profile} alt="test"/>
        <Subscribers subscribercount={count}></Subscribers>
    </div>
);

export default SubscribersCount;
