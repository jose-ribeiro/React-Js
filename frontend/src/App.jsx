import React from "react";
import "./App.css";
import Primeiro from "./Componentes/Basicos/Primeiro"
import Parametros from "./Componentes/Basicos/ComParametro"
import Fragmento from "./Componentes/Basicos/Fragmento";
import NunAleatorio from "./Componentes/Basicos/NunAleatorio";
import Card from "./Componentes/Basicos/layout/Card";

export default () => (

    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
        <Card titulo="#4 Desafio Aleatorio">
           <NunAleatorio min={1} max={10}/>
        </Card>
        
        <Card titulo="#3 Fragmento">
           <Fragmento/>
        </Card>

        <Card titulo="#2 Parametros">
            <Parametros
                titulo="Situação do Aluno"
                aluno="Pedro" nota={8.5}
            />
        </Card>
        
        <Card titulo="#1 Primeiro">
            <Primeiro/>            
        </Card>
        </div>


    </div>


)