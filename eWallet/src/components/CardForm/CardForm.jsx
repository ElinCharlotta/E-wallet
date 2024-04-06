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
        vendor:'',
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
                    <select name="vendor" id='vendor' value={cardData.vendor} onChange={handleChange}>
                        <option value="default">Select Vendor</option>
                        <option value="Bitcoin Inc">Bitcoin Inc</option>
                        <option value="Ninja Bank">Ninja Bank</option>
                        <option value="Block Chain Inc">Block Chain Inc</option>

                        <option value="Evil Corp">Evil Corp</option>
                    </select>
                    <button type="submit" className="activeBtn">Add Card</button>
                </form>
            </div>
        </>
    );
}

export default CardForm;