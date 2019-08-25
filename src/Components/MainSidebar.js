import React from 'react';
import Profile from './Images/Profile.jpg';
import PopoverCounts from './InnerComponents/Popover.Comment.Component.js';
const MainSidebar=()=>{
    return(
        <div className="sidebar-wrap white">
            <div className="list-online">
                <div className="image-badge">
                    <div className="user-image">
                        <img src={Profile} alt="" />
                        <span className="green-online"></span>
                        <div className="popover-section">
                            <div className="popover-title">
                                <a href="#"><img src={Profile} alt="" /></a>
                                <span>John Doe</span>
                            </div>
                            <div className="popover-text">
                                <p>Lorem ipsum st de</p>
                            </div>
                            <PopoverCounts popovercount={44}></PopoverCounts>
                        </div>
                    </div>
                </div>
                <div className="image-badge">
                    <div className="user-image">
                        <img src={Profile} alt="" />
                        <span className="green-online"></span>
                        <div className="popover-section">
                            <div className="popover-title">
                                <a href="#"><img src={Profile} alt="" /></a>
                                <span>John Doe</span>
                            </div>
                            <div className="popover-text">
                                <p>Lorem ipsum st de</p>
                            </div>
                            <PopoverCounts popovercount={80}></PopoverCounts>
                        </div>
                    </div>
                </div>
                <div className="image-badge">
                    <div className="user-image">
                        <img src={Profile} alt="" />
                        <span className="green-online"></span>
                        <div className="popover-section">
                            <div className="popover-title">
                                <a href="#"><img src={Profile} alt="" /></a>
                                <span>John Doe</span>
                            </div>
                            <div className="popover-text">
                                <p>Lorem ipsum st de</p>
                            </div>
                            <PopoverCounts popovercount={11}></PopoverCounts>
                        </div>
                    </div>
                </div>
                <div className="image-badge">
                    <div className="user-image">
                        <img src={Profile} alt="" />
                        <span className="green-online"></span>
                        <div className="popover-section">
                            <div className="popover-title">
                                <a href="#"><img src={Profile} alt="" /></a>
                                <span>John Doe</span>
                            </div>
                            <div className="popover-text">
                                <p>Lorem ipsum st de</p>
                            </div>
                            <PopoverCounts popovercount={52}></PopoverCounts>
                        </div>
                    </div>
                </div>
                <div className="image-badge">
                    <div className="user-image">
                        <img src={Profile} alt="" />
                        <span className="green-online"></span>
                        <div className="popover-section">
                            <div className="popover-title">
                                <a href="#"><img src={Profile} alt="" /></a>
                                <span>John Doe</span>
                            </div>
                            <div className="popover-text">
                                <p>Lorem ipsum st de</p>
                            </div>
                            <PopoverCounts popovercount={69}></PopoverCounts>
                        </div>
                    </div>
                </div>
                <div className="image-badge">
                    <div className="user-image">
                        <img src={Profile} alt="" />
                        <span className="green-online"></span>
                        <div className="popover-section">
                            <div className="popover-title">
                                <a href="#"><img src={Profile} alt="" /></a>
                                <span>John Doe</span>
                            </div>
                            <div className="popover-text">
                                <p>Lorem ipsum st de</p>
                            </div>
                            <PopoverCounts popovercount={15}></PopoverCounts>
                        </div>
                    </div>
                </div>
                <div className="image-badge">
                    <div className="user-image">
                        <img src={Profile} alt="" />
                        <span className="green-online"></span>
                        <div className="popover-section">
                            <div className="popover-title">
                                <a href="#"><img src={Profile} alt="" /></a>
                                <span>John Doe</span>
                            </div>
                            <div className="popover-text">
                                <p>Lorem ipsum st de</p>
                            </div>
                            <PopoverCounts popovercount={55}></PopoverCounts>
                        </div>
                    </div>
                </div> <div className="image-badge">
                    <div className="user-image">
                        <img src={Profile} alt="" />
                        <span className="green-online"></span>
                        <div className="popover-section">
                            <div className="popover-title">
                                <a href="#"><img src={Profile} alt="" /></a>
                                <span>John Doe</span>
                            </div>
                            <div className="popover-text">
                                <p>Lorem ipsum st de</p>
                            </div>
                            <PopoverCounts popovercount={56}></PopoverCounts>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    );

}
export default MainSidebar;