
import React from 'react';
import landingPagePic from "../../assets/images/landingPagePic.jpg";
import { Container } from 'reactstrap';


const HomePageContent = () => {
   
   
    const img = {
       height: "100%",
       width: "100%"
    
      
    }

    const imgContainer = {
        marginRight: "55px",
        marginLeft: "55px",
        justifyContent: "center",
        alignContent: "center",
        height: "900px"
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