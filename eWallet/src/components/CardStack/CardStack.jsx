import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { selectedCard } from '../../Redux/cardSlice';
import './CardStack.scss';

function CardStack() {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards.cards);
    const selectedActiveCard = useSelector(state => state.cards.selectedActiveCard);

    const handleCardClick = (card) => {
        dispatch(selectedCard(card));   
    };


    return (
        <div className="card-stack">
            {cards.map((card, id) => (
                card !== selectedActiveCard && (
                    <div key={id} className="card-wrapper"> 
                        <Card cardData={card} onClick={() => handleCardClick(card)} />
                    </div>
                )   
            ))}
        </div>
    );
}


export default CardStack;
