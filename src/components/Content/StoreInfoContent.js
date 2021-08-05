import React from 'react';
import storeInfoPic from "../../assets/images/storeInfoPic.jpg"
import { Container } from 'reactstrap';

const StoreInfoContent = () => {

    
  
    const img = {
        width: "85%",
        height: "670px",
        position: "absolute",
        backgroundPosition: "bottom"
      
    
    }

    const storeInfo = {
        fontWeight: "500",
        position: "relative"
   
    }

    const copyrightInfo = {
        fontSize: "16px",
        fontWeight: "500",
        position: "absolute",
        bottom: "0px"
 
    }




    return (
        
            <Container>
    
            
                    <img style={img} src={storeInfoPic} alt=""/>

                        <div style={storeInfo}>
                            <p>Location: 15413-1st Ave. Ct. South Blg. G, Tacoma, WA 98444</p>
                            <p>Showroom Hours: By Appointment</p>
                            <p>Phone Number:1-443-949-2766</p>
                        </div>

                        <div>
                            <h4 style={copyrightInfo}>@ Copyright 2012 Petal Tech Solutions</h4>
                        </div>
                        
            </Container>
            
        
    )
}

export default StoreInfoContent
