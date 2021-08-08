import React from 'react';
import storeInfoPic from "../../assets/images/storeInfoPic.jpg"
import { Container, Row, Col } from 'reactstrap';

const StoreInfoContent = () => {

    
  
    const img = {
        width: "85%",
        height: "665px",
        position: "absolute",
        backgroundPosition: "bottom"
      }

    const storeInfo = {
        fontWeight: "500",
        position: "relative",
        color: "#4e342e",
        justifyContent: "left",
        fontSize: "18px"
    }

   

    return (
        
            <Container>
    
            
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

            </Container>
            
        
    )
}

export default StoreInfoContent