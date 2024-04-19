import React from 'react';
import './Top.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './Top.scss';

function Top({ deleteCard }) {
    const selectedCard = useSelector(state => state.cards.selectedActiveCard);
    console.log('activeCard:', selectedCard);

    return (
        <div className="top">
            {selectedCard && (
                <div className="selected-card">
                    <Card cardData={selectedCard} />
                    <button className="selected-card__remove-card" onClick={() => deleteCard(selectedCard.id)}>Delete Card</button>
                </div>
            )}
        </div>
    );
}

export default Top;
