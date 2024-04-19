import { createSlice } from '@reduxjs/toolkit';



const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cards: JSON.parse(localStorage.getItem('cards')) || [],

    },
    reducers: {
        addCard: (state, action) => {
            const createId = Math.floor(Math.random() * 1000);
            const newCard = { ...action.payload, id: createId };
            state.cards.push(newCard);
            localStorage.setItem('cards', JSON.stringify(state.cards));
        },
        removeCard: (state, action) => {
            const cardRemovedById = action.payload;
            const updatedCards = state.cards.filter(card => card.id !== cardRemovedById.id);
            state.cards = updatedCards;
            localStorage.setItem('cards', JSON.stringify(updatedCards));
        },


        selectedCard: (state, action) => {
            console.log('selectedCard Payload:', action.payload);
            state.selectedActiveCard = action.payload;
            console.log('activeCard setSel:', state.selectedActiveCar);
        },
    }
});

export const { addCard, removeCard, selectedCard } = cardSlice.actions;
export default cardSlice.reducer;