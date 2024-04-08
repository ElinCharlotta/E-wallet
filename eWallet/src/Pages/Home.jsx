import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import Top from '../components/Top/Top';
import CardStack from '../components/CardStack/CardStack';

function Home() {

    const navigate = useNavigate();
  
    const cards = useSelector(state => state.cards.cards);

    const handleAddCardClick = () => {
        navigate('/addcard');
    };

    return (
        <div>
            <h1 className='Home__title'>E-WALLET</h1>
            <Top />
            <p className='home__description'>Active Card</p>
            <CardStack cards={cards} /> 
            <button className='home__button' onClick={handleAddCardClick}>ADD A NEW CARD</button>
        </div>
    );
}

export default Home;
