
import React from 'react';
import landingPagePic from "../../assets/images/landingPagePic.jpg";
import { Container } from 'reactstrap';


const HomePageContent = () => {
   
   
    const img = {
       height: "700px",
       width: "600px",
      
    }

    const imgContainer = {
        margin: "auto",
      
        maxWidth: "1000px"
    }



    return (
        
        <Container>
            
           <div style={imgContainer}>
                <img src={landingPagePic} style={img} alt=""/>
           </div>
                    
        </Container>
                

    )
}

export default HomePageContent