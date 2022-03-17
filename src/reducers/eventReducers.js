const initialState = {
    events: []
}

const eventReducers = (state = initialState, action) => {
    switch(action.type){
        case 'SAVE_EVENT':
            return {
                ...state,
                events: action.payload
            }
        
        default:
            return state;
    }
}
export default eventReducers;