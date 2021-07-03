import React, { useEffect } from 'react';
import Featured from './featured';
import SlimPromotion from 'utils/promotions/slim.block';

import { useDispatch, useSelector } from 'react-redux';
import { productsBySort } from 'store/actions/product.actions';

import CardBlock from 'utils/products/card.blocks';

const slimPromotion = {
    img: '/images/featured/shopc.jpg',
    lineOne: 'Up to 70% off',
    lineTwo: 'Prev season',
    linkTitle: 'SHOP HERE',
    linkTo: '/shop'
};

const Home = () => {
    const { bySold, byDate } = useSelector(state => state.products)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(productsBySort({
            limit: 4, sortBy: 'itemSold', order: 'desc', where: 'bySold'
        }));

        dispatch(productsBySort({
            limit: 4, sortBy: 'date', order: 'desc', where: 'byDate'
        }));
    }, [dispatch])

    console.log(bySold)
    console.log(byDate)

    return (
        <div>
            <Featured />

            {bySold ?
                <CardBlock
                    items={bySold}
                    title="Best selling boards"
                />
                : null}


            <SlimPromotion items={slimPromotion} />
        </div>
    )

}

export default Home;