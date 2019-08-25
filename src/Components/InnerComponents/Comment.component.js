import React from 'react';
import PropTypes from'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
const Comments=({ count })=>{
    return(
        <div className="content-meta">
            <div className="action-meta">
                <div className="counts">
                        <span><FontAwesomeIcon icon={faComment} /></span>
                    <span>{ count }</span>
                </div>
            </div>
         </div>
    )
}
Comments.propTypes = {
    count: PropTypes.number.isRequired,
};
export default Comments;