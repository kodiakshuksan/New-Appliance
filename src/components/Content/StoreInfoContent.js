import React from 'react';
import storeInfoPic from "../../assets/images/storeInfoPic.jpg"
import { Container, Row, Col } from 'reactstrap';

const StoreInfoContent = () => {

    
  
    const img = {
        width: "85%",
        height: "664px",
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

    const copyrightInfo = {
        fontSize: "16px",
        fontWeight: "500",
        position: "absolute",
        bottom: "-3px",
        color: "#4e342e"
    }
    
    const info = {
        textAlign: "left"
    }




    return (
        
            <Container>
    
            
                    <img style={img} src={storeInfoPic} alt=""/>
                        <Row>
                            <Col>.col</Col>
                        
                            <Col>
                        
                    
                        <div style={storeInfo}>
                            <p style={info}>Location: 15413-1st Ave. Ct. South Blg. G, Tacoma, WA 98444</p>
                            <p style={info}>Showroom Hours: By Appointment</p>
                            <p style={info}>Phone Number: 1-443-949-2766</p>
                        </div>
                        </Col>
                        </Row>

                        <div>
                            <h4 style={copyrightInfo}>@ Copyright 2021 Petal Tech Solutions</h4>
                        </div>
                        
            </Container>
            
        
    )
}

export default StoreInfoContent
