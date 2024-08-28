import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Cards from '../components/Cards'; 
import './HomePage.css';
import Footer from '../components/Footer';

const cardsData = [
  { title: 'Dior Lipstick', image: require('../images/lipstick/dior2.webp') },
  { title: 'Kay Beauty Foundation', image: require('../images/foundation/Kay_Beauty.jpg')},
  { title: 'Huda Beauty Blush', image: require('../images/blush/hudabeauty.webp')},
  { title: 'Kylie Highlighter', image: require('../images/highlighter/kylie.webp')},
  { title: 'Huda Beauty Bronze', image: require('../images/contour/huda beauty.webp')},
  { title: 'St London Powder', image: require('../images/Powder/stlondon2.webp')},
  { title: 'Mac Eyeshadow', image: require('../images/eyeshadow/mac.jpg')},
  { title: 'Kylie Mascara', image: require('../images/mascara/kylie.jpg')},
  { title: 'Huda beauty Gloss', image: require('../images/lip gloss/huda2.jpg')},
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
