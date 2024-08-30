import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Cards from '../components/Cards'; 
import './HomePage.css';
import Footer from '../components/Footer';

const cardsData = [
  { title: 'Lipstick', image: require('../images/lipstick/dior2.webp') },
  { title: 'Foundation', image: require('../images/foundation/Kay_Beauty.jpg')},
  { title: 'Blush', image: require('../images/blush/hudabeauty.webp')},
  { title: 'Highlighter', image: require('../images/highlighter/kylie.webp')},
  { title: 'Bronze', image: require('../images/contour/huda beauty.webp')},
  { title: 'Powder', image: require('../images/Powder/stlondon2.webp')},
  { title: 'Eyeshadow', image: require('../images/eyeshadow/mac.jpg')},
  { title: 'Mascara', image: require('../images/mascara/kylie.jpg')},
  { title: 'Gloss', image: require('../images/lip gloss/huda2.jpg')},
  { title: 'Concealer', image: require('../images/concealer/chanel.jpg') },
  { title: 'Primer', image: require('../images/primer/dior.jpg') },
  { title: 'Concealer', image: require('../images/concealer/chanel2.jpg') },
];

const HomePage = () => {
    return (
        <div>
            <Header />
            <SubHeader />
            <div className="homePage"></div>
            <br></br>
            <br></br>
            <div>
                <h1 className='bgHeading'>Unveil your Inner Glamour with Glamora</h1>
                <h1 className='bestProductHeading'>Our Best Selling Products</h1>
            </div>
            <div className="cardsContainer">
                {cardsData.map((card, index) => (
                    <Cards key={index} title={card.title} image={card.image}/>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;
