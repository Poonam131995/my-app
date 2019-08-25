import React from 'react';
import PropTypes from'prop-types';
const Subscribers=({ subscribercount })=>{
    return(
        <span>{subscribercount} Subscribers</span>
    )
}
Subscribers.propTypes = {
    subscribercount: PropTypes.number.isRequired,
};
export default Subscribers;