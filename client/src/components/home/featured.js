import React from 'react';
import Carrousel from 'utils/carrousel'


const Featured = () => {

    const corrouselItems = [
        {
            img: '/images/featured/boardsc.jpg',
            lineOne: 'New boards in stock',
            lineTwo: 'Upgrade your quiver!',
            lineTitle: 'Show Now',
            linkTo: '/shop'
        },
        {
            img: '/images/featured/boards4.jpg',
            lineOne: 'Pro models',
            lineTwo: 'New tech',
            lineTitle: 'View offers',
            linkTo: '/shop'
        },
        {
            img: '/images/featured/boards6.jpg',
            lineOne: 'Free Shipping',
            lineTwo: '*Orders over $500',
            lineTitle: 'View offers',
            linkTo: '/shop'
        }
    ]


    return (
        <div className="featured_container">
            <Carrousel items={corrouselItems} />
        </div>
    )
}

export default Featured;