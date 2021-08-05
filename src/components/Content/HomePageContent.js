
import React from 'react';
import landingPagePic from "../../assets/images/landingPagePic.jpg";
import { Container } from 'reactstrap';


const HomePageContent = () => {
   
   
    const img = {
        width: "100%",
        height: "665px",
        backgroundPosition: "bottom"
    }

    const copyrightInfo = {
        fontSize: "16px",
        fontWeight: "500",
        position: "absolute",
        bottom: "-10px",
        color: "#4e342e",
        textAlign: "center",
        marginRight: "60px"
    }


    return (
        
        <Container>
            
        
            <img src={landingPagePic} style={img} alt=""/>
            <p style={copyrightInfo}>@ Copyright 2021 Petal Tech Solutions</p>
                    
        </Container>
                

    )
}

export default HomePageContent