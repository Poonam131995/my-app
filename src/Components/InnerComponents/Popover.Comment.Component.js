import React from 'react';
import PropTypes from'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
const PopoverCounts=({ popovercount })=>{
    return(
        <div className="popover-action">
            <a href="#">
                <span><FontAwesomeIcon icon={faComment} /> <span>{popovercount}</span></span>
            </a>
        </div>
    )
}
PopoverCounts.propTypes = {
    popovercount: PropTypes.number.isRequired,
};
export default PopoverCounts;