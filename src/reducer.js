
export const initialState = {
    basket: []
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
            return { state };
            break;
        default:
            return state;
    }
}

export default reducer;