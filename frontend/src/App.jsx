import React from "react";
import "./App.css";
import FamiliaMenbro from "./Componentes/Basicos/FamiliaMenbro";
import Familia from "./Componentes/Basicos/Familia";
import ListaAlunos from "./Componentes/repeticao/ListaAlunos";
import Primeiro from "./Componentes/Basicos/Primeiro"
import Parametros from "./Componentes/Basicos/ComParametro"
import Fragmento from "./Componentes/Basicos/Fragmento";
import NunAleatorio from "./Componentes/Basicos/NunAleatorio";
import Card from "./Componentes/layout/Card";
import TabelaProduto from "./Componentes/repeticao/TabelaProduto";
import ParouImpa from "./Componentes/condicional/ParouImpa";
import Usuarioinfo from "./Componentes/condicional/UsuarioInfo";
import DiretaPai from "./Componentes/comunicaçao/diretaPai";
import IndiretaPai from "./Componentes/comunicaçao/IndiretaPai";
import Input from "./Componentes/formulario/Input";
import Contador from "./Componentes/contador/Contador";
import Mega from "./Componentes/DesafioMegaSena/Mega";


export default () => (

    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
        <Card titulo="#13 Desafio da Mega" color="#B9006E">
            <Mega quantidade={8} />
        </Card>

        <Card titulo="#12 Contador" color="#424242">
            <Contador numeroInicial={10}></Contador>
        </Card> 

        <Card titulo="#11 Cpmponent controlado" color="#E45F56">
            <Input/>
        </Card> 
        <Card titulo="#10 Comunicaçao Indireta " color="#59325C">
            <IndiretaPai />
            
        </Card>   
        <Card titulo="#09 Comunicação Direta " color="#59323C">
            <DiretaPai />
            
        </Card>   
            

        <Card titulo="#08 Renderização Condicional" color="#982395">
            <ParouImpa numero={21}/>
            <Usuarioinfo usuario={{nome: 'Jose'}} />
            
        </Card>              

        <Card titulo="#07 Desafio" color="#3A9AD8">
            <TabelaProduto/>
        </Card>   

        <Card titulo="#06 Repeticao" color="#FF4c65">
            <ListaAlunos/>
        </Card>            


        <Card titulo="#05 Componentes Filhos" color="#147B37">
            <Familia sobrenome="Lima">  
                <FamiliaMenbro nome="Jose" />
                <FamiliaMenbro nome="Ana" />
                <FamiliaMenbro nome="Carlos"/>        
            
            </Familia>

        </Card>

        <Card titulo="#04 Desafio Aleatorio" color="#FA6900">
           <NunAleatorio min={1} max={10}/>
        </Card>
        
        <Card titulo="#03 Fragmento" color="#E94C6F">
           <Fragmento/>
        </Card>

        <Card titulo="#02 Parametros" color="#E8B71A">
            <Parametros
                titulo="Situação do Aluno"
                aluno="Pedro" nota={8.5}
            />
        </Card>
        
        <Card titulo="#01 Primeiro" color="#588C73">
            <Primeiro/>            
        </Card>
        </div>


    </div>


)