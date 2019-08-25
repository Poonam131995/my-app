import React from 'react';
import Recipie from './Images/Recipie.jpg'
const LatestStories=()=>{
    return(
        <div className="sidebar-wrap white">
            
          <a href="#" className="latest-stories">
              <div className="stories-desc-left">
                <span>How to Succeed In Startups (Without Getting Lucky)</span>
                <span>By John doe</span>
              </div>
               <img src={Recipie} alt=""/>
          </a>
          <a href="#" className="latest-stories">
              <div className="stories-desc-left">
                <span>How to Succeed In Startups (Without Getting Lucky)</span>
                <span>By John doe</span>
              </div>
               <img src={Recipie} alt=""/>
          </a>
          <a href="#" className="latest-stories">
              <div className="stories-desc-left">
                <span>How to Succeed In Startups (Without Getting Lucky)</span>
                <span>By John doe</span>
              </div>
               <img src={Recipie} alt=""/>
          </a>
                
                
        </div>
    );

}
export default LatestStories;