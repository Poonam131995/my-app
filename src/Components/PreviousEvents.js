import React from 'react';
import Recipie from './Images/Recipie.jpg';
import Voting from './InnerComponents/Voting.Component'
import Comments from './InnerComponents/Comment.component.js'





const PreviousEvents = ({ data, actions, details }) => {
  return (
      <>
    <div className="heading-top">
    <h2>Yesterday</h2>
        <div className="dismiss-UpcomingPagesCard">
            {data.map((item) => (
                <div key={item.id} className="cards-link">
                    <a href="#" className="cards-link">
                        <div className="card-left">
                            <img src={Recipie} alt="test"/>
                        </div>
                        <div className="content-card">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="meta-cont"></div>
                        </div>
                        {actions && actions()}         
                    </a>
                    {details && details}

                </div>
            ))}
        </div>
    </div>
    </>
  );
};

export default PreviousEvents;