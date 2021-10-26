
export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {
    console.log("action", action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            // LOGIC
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            // logic
            let newBasket = [...state.basket];
            //newBasket = basket.filter(item => item.id !== action.id);
            const index = state.basket.findIndex(
                basketitem => basketitem.id === action.id
            );
            newBasket.splice(index, 1);

            return { ...state, basket: newBasket };
            break;
        default:
            return state;
    }
}

export default reducer;