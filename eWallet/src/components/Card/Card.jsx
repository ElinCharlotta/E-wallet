import React from 'react';
import Chip from '../../assets/chip-dark.svg';
import './Card.scss';

function Card({ cardData, onClick }) {
    console.log("Card data:", cardData);
   
    return (
        <main>
            <div className="card" onClick={onClick}>
                <img className="card__chip" src={Chip} alt="chip" />
                <p className="card__number">{cardData && cardData.number}</p>
                <p className="card__cardholder-name">Cardholder name: {cardData && cardData.cardholder}</p>
                <p className="card__Validity">Valid thru: {cardData && cardData.expiry}</p>
            </div>
        </main>
    );
}

export default Card;
