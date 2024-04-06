import React from 'react';
import { useDispatch } from 'react-redux';
import { moveCardToTop } from '../../Redux/cardSlice';
import Card from '../Card/Card';
import './CardStack.scss';


function CardStack({ cards }) {
    console.log("Cards from Redux:", cards);
    const dispatch = useDispatch();

    const handleClick = (card) => {
        // Flytta det klickade kortet till toppen av listan
        dispatch(moveCardToTop(card));
    };

    return (
        <div className="card-stack">
            {cards && cards.map((card, index) => (
                <div key={index} className="card-wrapper" onClick={() => handleClick(card)}>
                    <Card cardData={card} />
                </div>
            ))}
        </div>
    );
}

export default CardStack;

