import React from "react";

export default props =>{
    const geraIdade = () => parseInt(Math.random() * (20)) + 50 
    console.log(geraIdade)
 
    return(
        <div>
            <div>Filho</div>
            <button onClick={e => props.quandoClicar('Joao', geraIdade() ,'soldador')}>
                Fornecer Informações
            </button>

        </div>
        
    )
}