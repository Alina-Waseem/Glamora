import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import './CheekCollection.css';
import Cards from '../components/Cards';

const cardsData = [
    { title: 'Blush', image: require('../images/blush/hudabeauty.webp') },
    { title: 'Blush', image: require('../images/blush/kylie.webp') },
    { title: 'Blush', image: require('../images/blush/kaybeauty.jfif') },
    { title: 'Blush', image: require('../images/blush/kylie2.webp') },
    { title: 'Blush', image: require('../images/blush/bba.webp') },
    { title: 'Blush', image: require('../images/blush/mac.webp') },
    { title: 'Blush', image: require('../images/blush/maybelline.jpg') },
    { title: 'Blush', image: require('../images/blush/chanel.jpg') },
    { title: 'Blush', image: require('../images/blush/miss rose2.webp') },
    { title: 'Blush', image: require('../images/blush/mm.jpg') },
    { title: 'Blush', image: require('../images/blush/nars.webp') },
    { title: 'Blush', image: require('../images/blush/dior.jpg') },
    { title: 'Blush', image: require('../images/blush/kashee.webp') },
    { title: 'Blush', image: require('../images/blush/maybelline2.jpg') },
    { title: 'Blush', image: require('../images/blush/maybelline3.webp') },
    { title: 'Blush', image: require('../images/blush/miss rose.jpg') },
    { title: 'Blush', image: require('../images/blush/nars2.webp') },


    { title: 'Bronzer', image: require('../images/contour/huda beauty.webp') },
    { title: 'Bronzer', image: require('../images/contour/mm.jpg') },
    { title: 'Bronzer', image: require('../images/contour/nars.jpg') },
    { title: 'Bronzer', image: require('../images/contour/kylie.webp') },
    { title: 'Bronzer', image: require('../images/contour/mac.jfif') },
    { title: 'Bronzer', image: require('../images/contour/miss rose.webp') },
    { title: 'Bronzer', image: require('../images/contour/dior.jpg') },

    { title: 'Bronzer', image: require('../images/contour/bba.webp') },
    { title: 'Bronzer', image: require('../images/contour/chanel.jpg') },
    { title: 'Bronzer', image: require('../images/contour/kashee.webp') },
    { title: 'Bronzer', image: require('../images/contour/kay.jfif') },

    { title: 'Bronzer', image: require('../images/contour/maybelline.webp') },

    { title: 'Bronzer', image: require('../images/contour/nars2.jfif') },


    { title: 'Highlighter', image: require('../images/highlighter/bba.jpg') },
    { title: 'Highlighter', image: require('../images/highlighter/chanel.webp') },
    { title: 'Highlighter', image: require('../images/highlighter/dior.webp') },
    { title: 'Highlighter', image: require('../images/highlighter/hudabeauty.webp') },
    { title: 'Highlighter', image: require('../images/highlighter/kashee.webp') },
    { title: 'Highlighter', image: require('../images/highlighter/kay.webp') },
    { title: 'Highlighter', image: require('../images/highlighter/kylie.webp') },
    { title: 'Highlighter', image: require('../images/highlighter/mac.webp') },
    { title: 'Highlighter', image: require('../images/highlighter/maybelline.webp') },
    { title: 'Highlighter', image: require('../images/highlighter/miss rose.jpg') },
    { title: 'Highlighter', image: require('../images/highlighter/mm.webp') },
    { title: 'Highlighter', image: require('../images/highlighter/nars.jpg') },

];


const INITIAL_DISPLAY_COUNT = 12;

const CheekCollection = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get('filter');
    
    const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
    const [filteredData, setFilteredData] = useState(cardsData);

    useEffect(() => {
        if (filter) {
            setFilteredData(cardsData.filter(card => card.title === filter));
        } else {
            setFilteredData(cardsData); // Show all products when no filter is applied
        }
    }, [filter]);

    const handleViewMore = () => {
        setDisplayCount(filteredData.length);
    };

    return (
        <div>
            <Header />
            <SubHeader />
            <div className="CheekCollection">
                <h1 className='mainheading'>Cheek</h1>
            </div>
            <div className="cardsContainer">
                {filteredData.slice(0, displayCount).map((card, index) => (
                    <Cards key={index} title={card.title} image={card.image} />
                ))}
            </div>
            <div className="buttonContainer">
                {displayCount < filteredData.length && (
                    <button onClick={handleViewMore} className="viewMoreButton">
                        View More Products
                    </button>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default CheekCollection;