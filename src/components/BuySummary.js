

function BuySummary({data}){
    
    return (

        <article className="summary">
            <header className="p1">
                <h3>What</h3>
                <p>{data.artist}</p>
            </header>
            <div className="summary-where p1">
                <h3>Where</h3>
                <p>{data.arena}</p>
            </div>
            <div className="time-footer">
                <div className="date-start dashed">
                    <h3>When</h3>
                    <span> {data.date} {data.month}</span>
                </div>
                <div className="time-start dashed">
                    <h3>From</h3>
                    <span>{data.timeStart}</span>
                </div>
                <div className="time-end dashed">
                    <h3>TO</h3>
                    <span>{data.timeEnd}</span>
                </div>
            </div>
        </article>
    )
}
export default BuySummary;