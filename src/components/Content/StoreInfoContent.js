import React from 'react';
import storeInfoPic from "../../assets/images/storeInfoPic.jpg"
import { Container, Row, Col } from 'reactstrap';

const StoreInfoContent = () => {

    
  
    const img = {
        height: "100%",
        width: "900px",
        
  
        justifyContent: "center"
      }

    const storeInfo = {
        fontWeight: "500",
        position: "relative",
        color: "#4e342e",
        justifyContent: "left",
        fontSize: "18px"
    }

    const storeContainer = {
        marginRight: "55px",
        marginLeft: "55px"
    }

   

    return (
        
            <Container>
    
                <div style={storeContainer}>
                    <img style={img} src={storeInfoPic} alt=""/>
                        <Row xs="2">
                          <Col></Col>
                            <Col></Col>
                                <Col>
                                    <div style={storeInfo}>
                                        <p>Location: 15413-1st Ave. Ct. South Blg. G, Tacoma, WA 98444</p>
                                        <p>Showroom Hours: By Appointment</p>
                                        <p>Phone Number: 1-443-949-2766</p>
                                    </div>
                                </Col>
                        </Row>
                </div>
            </Container>
            
        
    )
}

export default StoreInfoContent