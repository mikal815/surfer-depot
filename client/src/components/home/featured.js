import React from 'react';
import Carrousel from 'utils/carrousel'


const Featured = () => {

    const corrouselItems = [
        {
            img: '/images/featured/featured_image.jpg',
            lineOne: 'New boards in stock..',
            lineTwo: 'Upgrade your quiver!',
            linkTitle: 'SHOP HERE',
            linkTo: '/shop'
        },
        {
            img: '/images/featured/boards4.jpg',
            lineOne: 'Pro models',
            lineTwo: 'New tech!',
            linkTitle: 'SHOP HERE',
            linkTo: '/shop'
        },
        {
            img: '/images/featured/boards6.jpg',
            lineOne: 'Free Shipping',
            lineTwo: '*Orders over $500',
            linkTitle: 'SHOP HERE',
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