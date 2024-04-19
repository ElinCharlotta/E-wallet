import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Top from '../components/Top/Top';
import CardStack from '../components/CardStack/CardStack';
import './Home.scss';
import { selectedCard, removeCard } from '../Redux/cardSlice';

function Home() {
    const navigate = useNavigate();
    const cards = useSelector(state => state.cards.cards);
    const dispatch = useDispatch();

    const handleAddCardClick = () => {
        navigate('/addcard');
    };

    const handleRemoveCard = (cardId) => {
        const cardRemove = cards.find(card => card.id === cardId);
        if (cardRemove) {
            dispatch(removeCard(cardRemove)); 
        }
    };
    useEffect(() => {
        const emptyCard = {
            cardholder: '',
            number: '',
            expiry: '',
            cvc: '',
            vendor: '',
            active: false
        };
        dispatch(selectedCard(emptyCard));
    }, [dispatch, cards]);

    return (
        <>
            <div className='home'>
                <h1 className='home__title'>E-WALLET</h1>
                <p className='home__description'>Active Card</p>
                <Top deleteCard={handleRemoveCard} />
                <CardStack card={cards} />
            </div>
            <div className="home__container">
                <button className='home__button' onClick={handleAddCardClick}>ADD A NEW CARD</button>
            </div>
        </>
    );
}

export default Home;
