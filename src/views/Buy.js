import '../App.css';
import {useSelector} from 'react-redux';

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import TicketsBuy from '../components/TicketsBuy';
function Buy(){
    let params = useParams();
    let urlID = parseInt(params.eventID);

    const oneEvent = useSelector((state) => {return state.events});
    
    return (
        <section className="buy">

            <TicketsBuy data={oneEvent} key={oneEvent.id}/>
        
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