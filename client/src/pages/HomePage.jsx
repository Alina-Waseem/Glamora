import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import './HomePage.css';

const HomePage = () => {
    return (
        <div >
            <Header />
            <SubHeader />
            <div className="homePage"></div>
            <br></br>
            <br></br>
            <div>
                <h1 className='bgHeading'>Unveil your Inner Glamour with Glamora</h1>
                <h1 className='bestProductHeading'>Our Best Selling Products</h1>
            </div>
        </div>
    );
}

export default HomePage;
