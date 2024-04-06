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
    switch (cardData && cardData.vendor) {
        case 'Bitcoin Inc':
            vendorLogo = BitcoinLogo;
            break;

        case 'Block Chain Inc':
            vendorLogo = BlockchainLogo;
            break;

        case 'Evil Corp':
            vendorLogo = EvilCorp;
            break;
        case 'Ninja Bank':
            vendorLogo = Ninja;
            break;
    }
    return (
        <main>
            <div className="card" onClick={onClick}>
                <img className="card__chip" src={Chip} alt="chip" />
                {vendorLogo && <img src={vendorLogo} alt="Vendor logo" className="vendor-logo" />}
                <p className="card__number">{cardData && cardData.number}</p>
                <p className="card__cardholder-name">Cardholder name: {cardData && cardData.cardholder}</p>
                <p className="card__Validity">Valid thru: {cardData && cardData.expiry}</p>
            </div>
        </main>
    );
}

export default Card;
