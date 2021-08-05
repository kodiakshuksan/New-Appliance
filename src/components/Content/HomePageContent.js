
import React from 'react';
import landingPagePic from "../../assets/images/landingPagePic.jpg";
import { Container } from 'reactstrap';


const HomePageContent = () => {
   
   
    const img = {
        width: "100%",
        height: "665px",
        backgroundPosition: "bottom"
    }



    return (
        
        <Container>
            
        
            <img src={landingPagePic} style={img} alt=""/>
           
                    
        </Container>
                

    )
}

export default HomePageContent