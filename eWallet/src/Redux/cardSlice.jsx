import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        activeCard: {
            cardholder: '',
            number: '',
            expiry: '',
            cvc: '',
            vendor: '',
            active: true
        },
        cards: [],
        selectedCard: null, 
    },
    reducers: {
        addCard: (state, action) => {
            console.log("New card data in reducer:", action.payload);

            state.cards.push(action.payload);
        },
        moveCardToTop: (state, action) => {
            const cardToMove = action.payload;
            const existingCardIndex = state.cards.findIndex(card => {
                return card.cardholder === cardToMove.cardholder &&
                       card.number === cardToMove.number &&
                       card.expiry === cardToMove.expiry &&
                       card.cvc === cardToMove.cvc &&
                       card.active === cardToMove.active;
            });
            
            if (existingCardIndex !== -1) {
                state.cards.splice(existingCardIndex, 1); // Ta bort kortet från nuvarande position
                state.cards.unshift(cardToMove); // Lägg till kortet längst upp i listan
            }
        },
        
    }
});

export const { addCard, moveCardToTop,  } = cardSlice.actions;
export default cardSlice.reducer;