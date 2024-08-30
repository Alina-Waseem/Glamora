import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import './FaceCollection.css';
import Cards from '../components/Cards';

const cardsData = [
    { title: 'Foundation', image: require('../images/foundation/Kay_Beauty.jpg') },
    { title: 'Foundation', image: require('../images/foundation/kylie jenner.webp') },
    { title: 'Foundation', image: require('../images/foundation/mac.webp') },
    { title: 'Foundation', image: require('../images/foundation/channel.webp') },
    { title: 'Foundation', image: require('../images/foundation/dior.webp') },
    { title: 'Foundation', image: require('../images/foundation/huda-beauty.webp') },
    { title: 'Foundation', image: require('../images/foundation/kylie jenner2.webp') },
    { title: 'Foundation', image: require('../images/foundation/Maybelline2.jpg') },
    { title: 'Foundation', image: require('../images/foundation/nars2.webp') },
    { title: 'Foundation', image: require('../images/foundation/MM.png') },
    { title: 'Foundation', image: require('../images/foundation/bba2.webp') },
    { title: 'Foundation', image: require('../images/foundation/Kashees.jpg') },
    { title: 'Foundation', image: require('../images/foundation/huda-beauty2.jpg') },
    { title: 'Foundation', image: require('../images/foundation/mac2.jpg') },
    { title: 'Foundation', image: require('../images/foundation/Maybelline.jpg') },
    { title: 'Foundation', image: require('../images/foundation/Miss-Rose.jpg') },
    { title: 'Foundation', image: require('../images/foundation/bba.webp') },
    { title: 'Foundation', image: require('../images/foundation/nars.jpg') },
    { title: 'Foundation', image: require('../images/foundation/MM2.webp') },
    { title: 'Foundation', image: require('../images/foundation/Miss-Rose2.jpg') },


    { title: 'Concealer', image: require('../images/concealer/bba.webp') },
    { title: 'Concealer', image: require('../images/concealer/chanel.jpg') },
    { title: 'Concealer', image: require('../images/concealer/chanel2.jpg') },
    { title: 'Concealer', image: require('../images/concealer/dior.webp') },
    { title: 'Concealer', image: require('../images/concealer/dior2.jpg') },
    { title: 'Concealer', image: require('../images/concealer/fitme.webp') },
    { title: 'Concealer', image: require('../images/concealer/hudabeauty.webp') },
    { title: 'Concealer', image: require('../images/concealer/hudabeauty2.webp') },
    { title: 'Concealer', image: require('../images/concealer/kay.webp') },
    { title: 'Concealer', image: require('../images/concealer/kay2.jpg') },
    { title: 'Concealer', image: require('../images/concealer/loreal2.webp') },
    { title: 'Concealer', image: require('../images/concealer/maybelline.jpg') },


    { title: 'Powder', image: require('../images/Powder/kylie.webp') },
    { title: 'Powder', image: require('../images/Powder/kylie2.webp') },
    { title: 'Powder', image: require('../images/Powder/stLondon.webp') },
    { title: 'Powder', image: require('../images/Powder/stlondon2.webp') },
    { title: 'Powder', image: require('../images/Powder/kay beauty.webp') },
    { title: 'Powder', image: require('../images/Powder/kaybeauty2.jfif') },
    { title: 'Powder', image: require('../images/Powder/nars.jpg') },
    { title: 'Powder', image: require('../images/Powder/chanel.webp') },
    { title: 'Powder', image: require('../images/Powder/dior.jfif') },
    { title: 'Powder', image: require('../images/Powder/dior2.webp') },
    { title: 'Powder', image: require('../images/Powder/huda beauty.webp') },
    { title: 'Powder', image: require('../images/Powder/huda beauty2.webp') },
    { title: 'Powder', image: require('../images/Powder/kashee.webp') },
    { title: 'Powder', image: require('../images/Powder/mac.jpg') },
    { title: 'Powder', image: require('../images/Powder/mac2.webp') },
    { title: 'Powder', image: require('../images/Powder/maybelline.webp') },
    { title: 'Powder', image: require('../images/Powder/miss rose.webp') },
    { title: 'Powder', image: require('../images/Powder/mm.webp') },
    { title: 'Powder', image: require('../images/Powder/bba.webp') },
    { title: 'Powder', image: require('../images/Powder/bba2.webp') },


    { title: 'Setting Spray', image: require('../images/spray/bba.webp') },
    { title: 'Setting Spray', image: require('../images/spray/bba2.webp') },
    { title: 'Setting Spray', image: require('../images/spray/elf.webp') },
    { title: 'Setting Spray', image: require('../images/spray/huda beauty.jfif') },
    { title: 'Setting Spray', image: require('../images/spray/j..webp') },
    { title: 'Setting Spray', image: require('../images/spray/mac.webp') },
    { title: 'Setting Spray', image: require('../images/spray/miss rose.webp') },
    { title: 'Setting Spray', image: require('../images/spray/nyx.jpg') },
    { title: 'Setting Spray', image: require('../images/spray/RevolutionMatteFix.webp') },
    { title: 'Setting Spray', image: require('../images/spray/stlondon.webp') },


    { title: 'Primer', image: require('../images/primer/bba.webp') },
    { title: 'Primer', image: require('../images/primer/chanel.jpg') },
    { title: 'Primer', image: require('../images/primer/dior.jpg') },
    { title: 'Primer', image: require('../images/primer/elf.webp') },
    { title: 'Primer', image: require('../images/primer/huda beauty.webp') },
    { title: 'Primer', image: require('../images/primer/kay.webp') },
    { title: 'Primer', image: require('../images/primer/kylie.webp') },
    { title: 'Primer', image: require('../images/primer/mac.webp') },
    { title: 'Primer', image: require('../images/primer/mac2.webp') },
    { title: 'Primer', image: require('../images/primer/MAYBELLIENE.webp') },
];


const INITIAL_DISPLAY_COUNT = 12;

const FaceCollection = () => {
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
            <div className="FaceCollection">
                <h1 className='mainheading'>Face</h1>
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

export default FaceCollection;