import React,{useState} from "react";
import "./Input.css"

export default props =>{
    const [valor, setValor] = useState('Inicial')

    function quandoMudar (evento){
        setValor(evento.target.value)
    }

    return(
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
                <div>Digite</div><input value={undefined}></input> 
            </div>
            
        </div>
        
    )
}