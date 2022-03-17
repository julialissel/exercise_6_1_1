function TicketsBuy({data}){
    return (
        <article className="ticketsContainer">
            <h2>You are about to score some tickets to</h2>
            <h3>{data.artist}</h3>
            <p>{data.date} {data.month} kl {data.timeStart} - {data.timeEnd}</p>
            <span className="arena">@ {data.arena}</span>
            <div className='price'>
                <span>{data.price} SEK</span>
            </div>
        </article>
    )
}
export default TicketsBuy;