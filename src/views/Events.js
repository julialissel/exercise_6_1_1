import '../App.css';
import { Link} from "react-router-dom";
import { useEffect } from 'react';
import ticketsData from '../assets/ticketsData.json';
import {useSelector, useDispatch} from 'react-redux';
import { saveEvent } from '../actions/eventActions';
import Event from '../components/Event';

function Events(){

    const dispatch = useDispatch();
    const events = useSelector((state) => {return state.events});

    useEffect( () => {
        
    
          dispatch(saveEvent(ticketsData));
        
        
      }, []);//körs enbart vid sidladdning 

    return (
        <section className="events">
            <h1>Events</h1>
            <div className='event-list'>
                {events.map((event) => (
                    <Link
                        to={{
                            pathname: `/buy/${event.id}`
                        }}
                        key={event.id}
                    >   
                        <Event data={event} />
                        
                    </Link>
                ))}
            </div>

        </section>
    )
}
export default Events;