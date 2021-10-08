import React from "react";

export default props =>{
    return(
        <div>
            <span><strong>{props.nome}</strong></span>
            <span>{props.idade} </span>
            <span>{props.bool ? 'Verdadeiro' : 'Falso'}! </span>
        </div>
    )
}