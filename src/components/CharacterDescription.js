import React from "react";

function characterDescription(props) {

    //const img= `https://rickandmortyapi.com/api/character/avatar/${props.id}.jpeg`;

    const showDescription = () => {
        let text;

        switch(props.id) {
            case 1:
                text = "hola";
                break;
            case 2:
                text = "Hi";
                break;

            case 3:
               text= "Hey";
                break;
                default:
        }
        return text;
    }

    return(
        <>
            <div>
                {showDescription()}
            </div>
        </>
    )
}

export default characterDescription;