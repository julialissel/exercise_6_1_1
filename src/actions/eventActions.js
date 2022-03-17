
// Spara Event 

export const saveEvent = (event) =>{
    return{
        type: 'SAVE_EVENT',
        payload: event
    }
}