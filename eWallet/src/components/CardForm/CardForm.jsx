import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'; 
import { addCard } from '../../Redux/cardSlice';
import './CardForm.scss';
import Card from '../Card/Card';


function CardForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cardData, setCardData] = useState({
        cardholder: '',
        number: '',
        expiry: '',
        cvc: '',
        active: true
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCardData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form data after dispatch:", cardData);
    
        dispatch(addCard(cardData)); // Uppdatera Redux med ny kortinformation
    
        navigate('/')
    };

    return (
        <>
        
            <Card cardData={cardData} />
            <div className="cardform">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="cardform__card-number"
                        placeholder="XXXX XXXX XXXX XXXX"
                        name="number"
                        value={cardData.number}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="cardform__card-name"
                        name="cardholder"
                        value={cardData.cardholder}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="card-section__card-expiry"
                        name="expiry"
                        value={cardData.expiry}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="card-section__card-cvc"
                        name="cvc"
                        value={cardData.cvc}
                        onChange={handleChange}
                    />

                    <button type="submit">Add Card</button>
                </form>
            </div>
        </>
    );
}

export default CardForm;