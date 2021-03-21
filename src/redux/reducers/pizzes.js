const initialState = {
    items: [],
    isLoading: true
}

const pizzes = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZES':
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
    
        default:
            return state;
    }
}

export default pizzes;