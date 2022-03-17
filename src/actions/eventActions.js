
// Spara Event 

export const allEvent = (event) =>{
    return{
        type: 'ALL_EVENT',
        payload: event
    }
}
export const currentEvent = (event) =>{
    return{
        type: 'CURRENT_EVENT',
        payload: event
    }
}