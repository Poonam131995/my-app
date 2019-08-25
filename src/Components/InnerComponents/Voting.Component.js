import React from 'react';
import PropTypes from'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
const Voting=({ Votes })=>{
    return(
        <div className="voting-section">
            <div className="voting-content">
                <span>
                <span><FontAwesomeIcon icon={faAngleUp} /></span>
                <span>{Votes}</span>
                </span>
            </div>
        </div>
    )
}
Voting.propTypes = {
    Votes: PropTypes.number.isRequired,
};
export default Voting;