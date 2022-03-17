import '../App.css';
import {useSelector} from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import TicketsBuy from '../components/TicketsBuy';
function Buy(){
    let params = useParams();
    const [events, setEvent] = useState([]);
    let urlID = parseInt(params.eventID);
    let sok;
    
    const eventsData = useSelector((state) => {return state.events});
    useEffect(() =>{
        sok = eventsData.filter((event)=>{
            return (
                event.id === urlID
            )
        });
        
        setEvent(sok);
    },[])
    
    return (
        <section className="buy">
            
            {events.map((event) =>{
                return(
                    <TicketsBuy data={event} key={event.id}/>
                )
            })}
           
            <Link
                        to={{
                            pathname: `/tickets/${urlID}`
                        }}
                        className="btn"
                    >   
                        Beställ
                        
                    </Link>
            
            
            

        </section>
    )
}
export default Buy;