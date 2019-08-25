import React from 'react';
import PropTypes from'prop-types';
const JobsCalender=({ posttime })=>{
    return(
        <span>{posttime} <a href="#">Share</a></span>
       
    )
}
JobsCalender.propTypes = {
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
};
export default JobsCalender;