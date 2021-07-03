import React from 'react';
import Featured from './featured';
import SlimPromotion from 'utils/promotions/slim.block';


const slimPromotion = {
    img: '/images/featured/shopc.jpg',
    lineOne: 'Up to 70% off',
    lineTwo: 'Prev season',
    linkTitle: 'SHOP HERE',
    linkTo: '/shop'
};

const Home = () => {

    return (
        <div>
            <Featured />
            <SlimPromotion items={slimPromotion} />
        </div>
    )

}

export default Home;