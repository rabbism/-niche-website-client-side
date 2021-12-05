import React from 'react';
import NavBar from '../NavBar/NavBar';
import Review from '../Review/Review';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import UpdateProduct from '../UpdateProduct/UpdateProduct';
import Footer from './../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <UpdateProduct></UpdateProduct>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;