import React from 'react';
import Recipie from './Images/Recipie.jpg';
import JobsPlace from './InnerComponents/JobsPlace.component.js';
import JobsCalender from './InnerComponents/JobsTime.js'
const JobsList = () => {
  return (
      <>
    <div className="heading-top">
    <h2>Jobs</h2>
        <div className="dismiss-UpcomingPagesCard">
            <div  className="cards-link">
                <a href="#">
                <div className="card-left">
                    <img src={Recipie} alt="test"/>
                </div>
                <div className="content-card">
                    <h3>Launch Recipes by Launchpeer</h3>
                    <p>The growth recipes used by 40 top unicorn startups</p> 
                    <div className="meta-cont"></div>
                </div>
                <JobsPlace placename={'Newyork'} ></JobsPlace>
                </a>
                <div className="content-subscription">
                        <JobsCalender posttime={'a day ago'}></JobsCalender>   
                </div>     
            </div>
            <div  className="cards-link">
                <a href="#">
                <div className="card-left">
                    <img src={Recipie} alt="test"/>
                </div>
                <div className="content-card">
                    <h3>Launch Recipes by Launchpeer</h3>
                    <p>The growth recipes used by 40 top unicorn startups</p> 
                    <div className="meta-cont"></div>

                </div>
                <JobsPlace placename={'Remote'} ></JobsPlace>
                </a>
                <div className="content-subscription">
                        <JobsCalender posttime={'2 day ago'}></JobsCalender>   
                </div>     
            </div>
            <div  className="cards-link">
                <a href="#">
                <div className="card-left">
                    <img src={Recipie} alt="test"/>
                </div>
                <div className="content-card">
                    <h3>Launch Recipes by Launchpeer</h3>
                    <p>The growth recipes used by 40 top unicorn startups</p> 
                    <div className="meta-cont"></div>

                </div>
                <JobsPlace placename={'Americos'} ></JobsPlace>
                </a>
                <div className="content-subscription">
                        <JobsCalender posttime={'5 day ago'}></JobsCalender>   
                </div>     
            </div>
            <div  className="cards-link">
                <a href="#">
                <div className="card-left">
                    <img src={Recipie} alt="test"/>
                </div>
                <div className="content-card">
                    <h3>Launch Recipes by Launchpeer</h3>
                    <p>The growth recipes used by 40 top unicorn startups</p> 
                    <div className="meta-cont"></div>

                </div>
                <JobsPlace placename={'Newyork'} ></JobsPlace>
                </a>
                <div className="content-subscription">
                        <JobsCalender posttime={'20 day ago'}></JobsCalender>   
                </div>     
            </div>
            <div  className="cards-link">
                <a href="#">
                <div className="card-left">
                    <img src={Recipie} alt="test"/>
                </div>
                <div className="content-card">
                    <h3>Launch Recipes by Launchpeer</h3>
                    <p>The growth recipes used by 40 top unicorn startups</p> 
                    <div className="meta-cont"></div>

                </div>
                <JobsPlace placename={'Americos'} ></JobsPlace>
                </a>
                <div className="content-subscription">
                        <JobsCalender posttime={'5 day ago'}></JobsCalender>   
                </div>     
            </div>
         
        </div>
    </div>
    </>
  );
};

export default JobsList;