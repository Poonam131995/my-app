import React from 'react';
import { Container, Row, Col,ListGroup, ListGroupItem  } from 'reactstrap';

const Radio=()=>{
    return(
    <div className="container-width content-wrap ">
         <Container className="container-main white pad-20">
            <Row>
                <Col xs="12" md="12" lg="12">
                <center><h1>Product Hunt Radio</h1></center> 
                </Col>   

                <Col xs="12" md="12" lg="8">
                    <div className="radiocontent">
                        <p>A weekly podcast with the people creating and exploring the future. Tune in every week with Ryan Hoover and Abadesi Osunsade as they're joined by founders, investors, journalists, and makers to discuss the latest in tech.
</p>
                    </div>
                </Col>
                <Col xs="12" md="12" lg="4">
                <ListGroup flush>
                    <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                </ListGroup>            
                </Col>
            </Row>
      </Container>
    </div>
    );
} 
export default Radio;