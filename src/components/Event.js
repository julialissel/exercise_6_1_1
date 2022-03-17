function Event({data}){
    return(
        <div className="event">
                    
            <div className="date-box"> 
                <span className="event-day">{data.date}</span> 
                <span className="event-month">{data.month}</span>
            </div>
            <div className="event-info">
                <h4>{data.artist}</h4>
                <h5>{data.arena}</h5>
                <div className="event-more-info">
                    <div className="event-time">
                        <span>{data.timeStart} - {data.timeEnd}</span>
                    </div>
                    <div className="event-price">
                        <span>{data.price} SEK</span>
                    </div>

                </div>
            </div>
                   
        </div>
    )
}
export default Event;