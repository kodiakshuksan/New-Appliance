import React from 'react';
import StoreInfoPageNav from '../Navigation/StoreInfoPageNav';
import StoreInfoContent from '../Content/StoreInfoContent';
import StoreInfoFooter from '../Footer/StoreInfoFooter';

const StoreInfoPage = () => {
    return (
        <div>
            <StoreInfoPageNav />
            <StoreInfoContent />
            <StoreInfoFooter />
        </div>
    )
}

export default StoreInfoPage