import React,{useState} from "react";
import IndiretaFilo from "./IndiretaFilo";

export default props =>{
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [funcao, setFuncao] = useState('?')

    function fonercerInfo(nome,idade, funcao){
        setNome(nome)
        setIdade(idade)
        setFuncao(funcao)
    }

    return(
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong> </span>
                <span>{funcao} </span>
            </div>
            <IndiretaFilo  quandoClicar={fonercerInfo}/>
            

        </div>
    )
}