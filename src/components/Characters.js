import React  from "react";
import { Link } from "react-router-dom";

const openCharacterDescription = (id, name) => {
    console.log("char id", id)
}

const Characters = ({characters = []}) => {
    return(
        <div className="row">
            {characters.map((item, index) => (
            <div key={index} className="col-4">
                <div className="card">
                    <img src={item.image} alt="" />
                    <div className="card-boby">
                        <h5
                            onClick={()=> openCharacterDescription(item.id, item.name)}
                            className="card-title">
                                <Link href="CharacterDescription">{item.name}</Link>
                        </h5>
                        <hr />
                        <p>species: {item.species}</p>
                        <p>Gender: {item.gender}</p>
                        <p>Location: {item.location.name}</p>
                        <p className="badge bg-success">status: {item.status}</p>
                        <p>type: {item.type}</p>
                    </div>
                    
                </div>

            </div>
        
            ))}
        </div>
    );
};

export default Characters;