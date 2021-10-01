import React from "react";
import Primeiro from './componentes/primeiro';
import Parametros from './componentes/Parametros';
import Fragmento from './componentes/Fragmento';
import NumAleatorio from "./componentes/NumAleatorio";
import Card from "./componentes/layout/Card";


export default () => (

    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo="#4 Desafio Aleatorio">
            <NumAleatorio min={1} max={10} />
        </Card>
        <Card titulo="#3 Fragmento">
            <Fragmento />
        </Card>
        <Card titulo="#2 Parametros">
          <Parametros
            titulo="Situação do Aluno"
            aluno="Pedro" nota={8.5}
          />
        </Card>
        <Card titulo="#1 Primeiro">
            <Primeiro></Primeiro>
        </Card>
        
        

        
    </div>


)