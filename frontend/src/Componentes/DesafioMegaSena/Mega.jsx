import React, {useState}from "react";
import "./Mega.css"

export default props => {
    function gerarNumeroContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ? gerarNumeroContido(min, max, array) : aleatorio
    }

    function gerarNumero(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroContido(1, 60, nums)
                console.log([...nums, novoNumero])
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros;
    }
    const [quantidade, setQquantidade] = useState(props.quantidade || 6)
    const numerosinicias = gerarNumero(quantidade)
    const [numeros, setNumeros] = useState(numerosinicias)
    
    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join('  ')}</h3>
            <div>
                <label>Quantidade de Numeros</label>
                <input min="6" max="12"type="number" value={quantidade} 
                onChange={(e) => {
                    setQquantidade(+ e .target.value)
                    setNumeros(gerarNumero(+ e .target.value))
                }}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumero(quantidade))}>
                Gerar Números
            </button>
        </div>
    )
}