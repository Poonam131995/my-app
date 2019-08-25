import React from 'react';
import PropTypes from'prop-types';
const JobsPlace=({ placename })=>{
    return(
        <div className="right-place">
            <span>{placename}</span>
        </div>
       
    )
}
JobsPlace.propTypes = {
    placename: PropTypes.string.isRequired,
};
export default JobsPlace;