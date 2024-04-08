import React from 'react';
import Chip from '../../assets/chip-dark.svg';
import BitcoinLogo from '../../assets/vendor-bitcoin.svg';
import BlockchainLogo from '../../assets/vendor-blockchain.svg';
import EvilCorp from '../../assets/vendor-evil.svg';
import Ninja from '../../assets/vendor-ninja.svg';
import './Card.scss';

function Card({ cardData, onClick }) {
    console.log("Card data:", cardData);

    let vendorLogo = null;
    let backgroundColor = '';

    switch (cardData && cardData.vendor) {
        case 'Bitcoin Inc':
            vendorLogo = BitcoinLogo;
            backgroundColor = '#FFAE34';
            break;

        case 'Block Chain Inc':
            vendorLogo = BlockchainLogo;
            backgroundColor = '#8B58F9';
            break;

        case 'Evil Corp':
            vendorLogo = EvilCorp;
            backgroundColor = '#F33355'; 
            break;

        case 'Ninja Bank':
            vendorLogo = Ninja;
            backgroundColor = '#222222'; 
            break;

        default:
            backgroundColor = 'white'; 
            break;
    }

    const cardStyle = {
        backgroundColor: backgroundColor
    };

    return (
        <main>
            <div className="card" style={cardStyle} onClick={onClick}>
                <img className="card__chip" src={Chip} alt="chip" />
                {vendorLogo && <img src={vendorLogo} alt="Vendor logo" className="vendor-logo" />}
                <p className="card__number">{cardData && cardData.number}</p>
                <p className="card__cardholder-name">Cardholder name: {cardData && cardData.cardholder}</p>
                <p className="card__validity">Valid thru: {cardData && cardData.expiry}</p>
            </div>
        </main>
    );
}

export default Card;
