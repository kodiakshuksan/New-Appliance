import React from 'react'

const Footer = () => {

    const copyrightInfo = {
        fontSize: "16px",
        fontWeight: "500",
        position: "relative",
        color: "#4e342e",
        marginTop:   "500px"
    }

    return (
        <div>
             <footer style={copyrightInfo}>
                    <p>@ Copyright 2021 Petal Tech Solutions</p>
                </footer>
                
        </div>
    )
}

export default Footer
