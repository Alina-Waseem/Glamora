import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import './LipsCollection.css';
import Cards from '../components/Cards';

const cardsData = [
    { title: 'Lipstick', image: require('../images/lipstick/bba.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/dior2.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/hudabeauty.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/hudabeauty2.jfif') },
    { title: 'Lipstick', image: require('../images/lipstick/kylie2.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/mac.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/mac2.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/bba2.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/chanel.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/chanel2.png') },
    { title: 'Lipstick', image: require('../images/lipstick/dior.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/kashee.jpg') },
    { title: 'Lipstick', image: require('../images/lipstick/kay.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/kay2.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/kylie.jpg') },
    { title: 'Lipstick', image: require('../images/lipstick/maybelline.jpg') },
    { title: 'Lipstick', image: require('../images/lipstick/maybelline2.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/miss rose.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/miss rose2.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/mm.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/mm2.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/nars.webp') },
    { title: 'Lipstick', image: require('../images/lipstick/nars2.webp') },


    { title: 'Lip Gloss', image: require('../images/lip gloss/huda.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/huda2.jpg') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/huda3.jpg') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/huda4.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/dior.jpg') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/dior2.jpg') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/dior3.jpg') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/dior4.jpg') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/bba.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/bba2.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/chanel.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/chanel2.jfif') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/kashee 2.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/kashee.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/kay.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/kay2.jpg') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/kylie.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/kylie2.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/mac.jfif') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/mac2.jpg') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/mac3.jfif') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/maybelline.jpg') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/maybelline2.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/miss rose.jfif') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/miss rose2.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/mm.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/mm2.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/mm3.webp') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/nars.jpg') },
    { title: 'Lip Gloss', image: require('../images/lip gloss/nars2.jpg') },

    { title: 'Lip Liner', image: require('../images/lip liner/bba.webp') },
    { title: 'Lip Liner', image: require('../images/lip liner/bba2.webp') },
    { title: 'Lip Liner', image: require('../images/lip liner/chanel.webp') },
    { title: 'Lip Liner', image: require('../images/lip liner/dior.png') },
    { title: 'Lip Liner', image: require('../images/lip liner/hudabeauty.webp') },
    { title: 'Lip Liner', image: require('../images/lip liner/hudabeauty2.jpg') },
    { title: 'Lip Liner', image: require('../images/lip liner/kashee.webp') },
    { title: 'Lip Liner', image: require('../images/lip liner/kay.webp') },
    { title: 'Lip Liner', image: require('../images/lip liner/kylie.webp') },
    { title: 'Lip Liner', image: require('../images/lip liner/mac.webp') },
    { title: 'Lip Liner', image: require('../images/lip liner/maybelline.jpg') },
    { title: 'Lip Liner', image: require('../images/lip liner/maybelline2.jpg') },
    { title: 'Lip Liner', image: require('../images/lip liner/miss rose.jpg') },
    { title: 'Lip Liner', image: require('../images/lip liner/miss rose2.webp') },
    { title: 'Lip Liner', image: require('../images/lip liner/nars.webp') },

];


const INITIAL_DISPLAY_COUNT = 12;

const LipsCollection = () => {
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
            <div className="LipsCollection">
                <h1 className='mainheading'>Lips</h1>
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

export default LipsCollection;