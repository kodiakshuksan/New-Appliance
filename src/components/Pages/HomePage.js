import React from 'react';
import HomePageNav from '../Navigation/HomePageNav';
import HomePageContent from '../Content/HomePageContent';
import HomePageFooter from "../Footer/HomePageFooter";

const HomePage = () => {
    return (
        <div>
            <HomePageNav />
            <HomePageContent />
            <HomePageFooter />
        </div>
    )
}

export default HomePage
