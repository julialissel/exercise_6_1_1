import '../App.css';
import BuySummary from '../components/BuySummary';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
function Tickets(){
    let params = useParams();
    const [events, setEvent] = useState([]);
    let sok;
    let urlID = parseInt(params.eventID);
    const eventsD = useSelector((state) => {return state.events});
    useEffect(() =>{
        sok = eventsD.filter((event)=>{
            return (
                event.id === urlID
            )
        });
        
        setEvent(sok);
    },[])
    console.log(urlID);
    
    return (
        <section className="events">
            <h1>Tack för din beställning</h1>
            {events.map((event) => {
                return <BuySummary data={event} key={event.id}/>
            })}
            
            

        </section>
    )
}
export default Tickets;