function Card(props) {
    return (
        <div className="card ">
            <img src={props.imgsrc} className="card-img-top imgSize" alt="..."  height="250"/>
            <div className="card-body">
                <h5 className="card-title">{props.cardName}</h5>
                <p className="card-text">{props.summery}</p>
            </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">IMDB rating - {props.rating}</li>
                    <li className="list-group-item">Release Date - {props.releasedate}</li>
                    <li className="list-group-item">Box Office -{props.boxoffice}</li>
                </ul>
            <div className="card-body">
                <a href="#" className="btn btn-primary mx-2">Watch Trailer</a>
                <a href="#" className=" btn btn-primary mx-2" >See reviews</a>
            </div>
        
        </div>
    )
}

export default Card;