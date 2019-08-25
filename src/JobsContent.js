import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import JobsList from './Components/JobsList.js';
import FilterForm from './Components/InnerComponents/FilterFormSidebar.component.js';
import SubscribeForm from './Components/SubscribeForm.js';
const Content=()=>{
    return(
    <div className="container-width content-wrap">
         <Container className="container-main">
            <Row>
                <Col xs="12" md="12" lg="8">
                    <JobsList></JobsList>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <div className="heading-top">
                         <h2>Filters</h2>    
                    <div className="dismiss-UpcomingPagesCard">
                        <FilterForm></FilterForm>
                    </div>
                    </div>
                    <div className="dismiss-UpcomingPagesCard">                    
                    <SubscribeForm></SubscribeForm>
                    </div>
                     
                </Col>
            </Row>
      </Container>
    </div>
    );
} 
export default Content;