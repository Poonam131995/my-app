import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainSidebar from '../Components/MainSidebar.js';
import LatestStories from '../Components/LatestStories.js';
import Events from '../Components/PreviousEvents.js';
import { Button } from 'reactstrap';
import Voting from '../Components/InnerComponents/Voting.Component';
import { SubscribersCount } from "../Components/SubscribersCount";
import Comments from '../Components/InnerComponents/Comment.component'

const data = [
    {
        id: 1,
        title: 'Launch Recipes by Launchpeer',
        description: 'The growth recipes used by 40 top unicorn startups',
    },
    {
        id: 2,
        title: 'Launch Recipes by Launchpeer',
        description: 'The growth recipes used by 40 top unicorn startups',
    },
    {
        id: 3,
        title: 'Launch Recipes by Launchpeer',
        description: 'The growth recipes used by 40 top unicorn startups',
    }
];

const upcomingEvents = [
    {
        id: 1,
        title: 'Launch Recipes by Launchpeer',
        description: 'The growth recipes used by 40 top unicorn startups',
    },
    {
        id: 2,
        title: 'Launch Recipes by Launchpeer',
        description: 'The growth recipes used by 40 top unicorn startups',
    },
    {
        id: 3,
        title: 'Launch Recipes by Launchpeer',
        description: 'The growth recipes used by 40 top unicorn startups',
    },
    {
        id: 4,
        title: 'Launch Recipes by Launchpeer',
        description: 'The growth recipes used by 40 top unicorn startups',
    },
    {
        id: 5,
        title: 'Launch Recipes by Launchpeer',
        description: 'The growth recipes used by 40 top unicorn startups',
    },
    {
        id: 6,
        title: 'Launch Recipes by Launchpeer',
        description: 'The growth recipes used by 40 top unicorn startups',
    }
];

const Content=()=>{
    return(
    <div className="container-width content-wrap">
         <Container className="container-main">
            <Row>
                <Col xs="12" md="12" lg="8">
                    <Events
                        data={upcomingEvents}
                        actions={() => (
                            <div className="right-place">
                                <Button outline color="secondary" size="sm">Subscribe</Button>
                            </div>
                        )}
                        details={(
                            <SubscribersCount count={400} />
                        )}
                    />
                    <Events
                        data={data}
                        actions={() => <Voting Votes={320} ></Voting>   }
                        details={<Comments count={5} ></Comments>}
                    />
                </Col>
                <Col xs="12" md="12" lg="4">
                    <div className="heading-top">
                         <h2>Makers working today</h2>    
                         <MainSidebar></MainSidebar>
                    </div>
                  
                    <div className="heading-top">
                         <h2>Latest Stories</h2>  
                         <LatestStories></LatestStories>  
                    </div>
                   
                </Col>
            </Row>
      </Container>
    </div>
    );
} 
export default Content;