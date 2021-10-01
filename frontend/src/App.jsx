import React from "react";
import Primeiro from './componentes/primeiro';
import Parametros from './componentes/Parametros';
import Fragmento from './componentes/Fragmento';
import NumAleatorio from "./componentes/NumAleatorio";
import Card from "./componentes/layout/Card";


export default () => (

    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo="Desafio Aleatorio">
            <NumAleatorio min={1} max={10} />
        </Card>
        <Card titulo="Desafio Aleatorio">
            <Fragmento />
        </Card>
        <Card titulo="Desafio Aleatorio">
          <Parametros
            titulo="Situação do Aluno"
            aluno="Pedro" nota={8.5}
          />
        </Card>
        <Card titulo="Desafio Aleatorio">
            <Primeiro></Primeiro>
        </Card>
        
        

        
    </div>


)