import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import './EyesCollection.css';
import Cards from '../components/Cards';

const cardsData = [
    { title: 'Mascara', image: require('../images/mascara/bba.webp') },
    { title: 'Mascara', image: require('../images/mascara/chanel.webp') },
    { title: 'Mascara', image: require('../images/mascara/dior.jpg') },
    { title: 'Mascara', image: require('../images/mascara/huda beauty.webp') },
    { title: 'Mascara', image: require('../images/mascara/huda beauty2.jpg') },
    { title: 'Mascara', image: require('../images/mascara/kaybeauty.png') },
    { title: 'Mascara', image: require('../images/mascara/kylie.jpg') },
    { title: 'Mascara', image: require('../images/mascara/mac.png') },
    { title: 'Mascara', image: require('../images/mascara/maybelline.webp') },
    { title: 'Mascara', image: require('../images/mascara/maybelline2.webp') },
    { title: 'Mascara', image: require('../images/mascara/miss rose.webp') },
    { title: 'Mascara', image: require('../images/mascara/mm.webp') },
    { title: 'Mascara', image: require('../images/mascara/nars.jpg') },
    { title: 'Mascara', image: require('../images/mascara/nars2.jpg') },
    { title: 'Mascara', image: require('../images/mascara/kashee.jfif') },

    { title: 'Eyeliner', image: require('../images/eyeliner/bba.webp') },
    { title: 'Eyeliner', image: require('../images/eyeliner/bba2.webp') },
    { title: 'Eyeliner', image: require('../images/eyeliner/chanel.jpg') },
    { title: 'Eyeliner', image: require('../images/eyeliner/dior.jpg') },
    { title: 'Eyeliner', image: require('../images/eyeliner/hudabeauty.webp') },
    { title: 'Eyeliner', image: require('../images/eyeliner/kay.png') },
    { title: 'Eyeliner', image: require('../images/eyeliner/kylie.webp') },
    { title: 'Eyeliner', image: require('../images/eyeliner/loreal.jpg') },
    { title: 'Eyeliner', image: require('../images/eyeliner/mac.png') },
    { title: 'Eyeliner', image: require('../images/eyeliner/maybelline.jpg') },
    { title: 'Eyeliner', image: require('../images/eyeliner/mm.webp') },
    { title: 'Eyeliner', image: require('../images/eyeliner/nars.webp') },
    { title: 'Eyeliner', image: require('../images/eyeliner/nars2.webp') },

    { title: 'Eyeshadow', image: require('../images/eyeshadow/bba.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/dior.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/huda beauty.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/kashee.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/kaybeauty.jpg') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/kylie.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/kylie2.Jpg') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/mac.jpg') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/mac2.jpg') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/maybelline.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/maybelline2.jpg') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/miss rose.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/miss rose2.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/mm.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/mm2.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/nars.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/nars2.webp') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/nyx.jpg') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/chanel.jpg') },
    { title: 'Eyeshadow', image: require('../images/eyeshadow/chanel2.jpg') },

    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/bba.webp') },
    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/chanel.jpg') },
    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/hudabeauty.webp') },
    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/dior.jpg') },
    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/kay.jpg') },
    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/kylie.webp') },
    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/mac.jfif') },
    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/maybelline.webp') },
    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/miss rose.webp') },
    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/nars.webp') },
    { title: 'Eyebrow Pencil', image: require('../images/eyebrow/rios.webp') },
];


const INITIAL_DISPLAY_COUNT = 12;

const EyesCollection = () => {
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
            <div className="EyesCollection">
                <h1 className='mainheading'>Eyes</h1>
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

export default EyesCollection;