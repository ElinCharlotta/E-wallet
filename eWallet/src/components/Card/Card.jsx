import React from 'react';
import Chip from '../../assets/chip-light.svg';
import '../../styles/globalStyles.scss';
import './Card.scss';

function Card({ cardData, onClick }) {
    console.log('Card data:', cardData);

    const { vendor } = cardData
    
    const cardNumberDisplay = cardData && cardData.number ? cardData.number : 'XXXX XXXX XXXX XXXX';
    const cardHolderName = cardData && cardData.cardholder ? cardData.cardholder : 'FIRSTNAME LASTNAME';
    const validThru = cardData && cardData.expiry ? cardData.expiry : 'MM/YY'

    return (
        <main>
            <div className={`card ${vendor.toLowerCase()} vendor-style`} onClick={onClick}>
                <img className='card__chip' src={Chip} alt='chip' />
                <p className='card__number'>{cardNumberDisplay}</p>
                <div className='card__information'>
                    <aside className='card__information__left'>
                        <p className='card__information__cardholder-name'>CARDHOLDER NAME </p>
                        <p className='card__information__cardholder'>{cardHolderName}</p>
                    </aside>

                    <aside className='card__information__right'>
                        <p className='card__information__validity'>VALID THRU </p>
                        <p className='card__information__vaild'>{validThru}</p>
                    </aside>

                </div>
            </div>
        </main>
    );
}

export default Card;
