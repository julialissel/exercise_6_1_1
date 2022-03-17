import '../App.css';
import BuySummary from '../components/BuySummary';

import {useSelector} from 'react-redux';
function Tickets(){
    const oneEvent = useSelector((state) => {return state.events});
    
    return (
        <section className="events">
            <h1>Tack för din beställning</h1>
            <BuySummary data={oneEvent} key={oneEvent.id}/>
        </section>
    )
}
export default Tickets;