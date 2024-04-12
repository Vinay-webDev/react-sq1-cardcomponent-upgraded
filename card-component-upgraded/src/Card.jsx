


function Card(props) {
    return(
        <div className="card" >
            <img className="img" src={props.image} />
            <h1 className="title" > {props.title} </h1>
            <p className="text" > {props.text} </p>
        </div>
    );
}

export default Card 




