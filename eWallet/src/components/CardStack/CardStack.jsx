import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { setSelectedCard } from '../../Redux/cardSlice';
import './CardStack.scss';

function CardStack() {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards.cards);
    const activeCard = useSelector(state => state.cards.activeCard);

    const handleCardClick = (card) => {
        dispatch(setSelectedCard(card));
    };

    return (
        <div className="card-stack">
            {cards.map(card => (
                card !== activeCard && (
                    <div key={card.id} className="card-wrapper" >
                        <Card cardData={card} onClick={() => handleCardClick(card)} />
                    </div>
                )
            ))}
        </div>

    );
}

export default CardStack;
