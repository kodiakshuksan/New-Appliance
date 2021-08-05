import React from 'react';
import landingPagePic from "../../assets/images/landingPagePic.jpg";
import { Container } from 'reactstrap';


const HomePageContent = () => {
   
   
    const img = {
        width: "100%",
        height: "700px",
        backgroundPosition: "bottom"
    }

    const copyrightInfo = {
        fontSize: "16px",
        fontWeight: "500",
        position: "absolute",
        bottom: "-12px",
        color: "#4e342e"
    }


    return (
        
        <Container>
            
        
            <img src={landingPagePic} style={img} alt=""/>
            <p style={copyrightInfo}>@ Copyright 2021 Petal Tech Solutions</p>
                    
        </Container>
                

    )
}

export default HomePageContent
