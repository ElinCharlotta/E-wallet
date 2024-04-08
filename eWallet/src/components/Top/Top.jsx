import React from 'react';
import './Top.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

function Top() {
    const selectedCard = useSelector(state => state.cards.activeCard);
    console.log('vad är det som sker', selectedCard);

    return (
        <div className="top">
            {selectedCard && (
                <div className="selected-card">
                    <Card cardData={selectedCard} />
                </div>
            )}
        </div>
    );
}

export default Top;
