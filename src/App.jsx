import './App.css'
import React from 'react'


import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalIf from './components/basicos/CondicionalIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Loteria from './components/loteria/Loteria'


export default (props) => (
    <div className="App">
        <h1 className = "Titulo">Fundamentos React</h1>
        <div className="Cards">

            

            <Card titulo="#11 - Loteria" colorbottom="#0392cf" colorborder="#000">
                <Loteria qtdeNumero = {6} ></Loteria>
            </Card>

            <Card titulo="#10 - Contador" colorbottom="#29a8ab" colorborder="#000">
                <Contador passo={1} valor={0}></Contador>
            </Card>

            <Card titulo="#09 - Input" colorbottom="#4f372d" colorborder="#000">
                <Input></Input>
            </Card>

            <Card titulo="#08 - Comunicação Indireta" colorbottom="#cc2a36" colorborder="#000">
                <Super></Super>
            </Card>

            <Card titulo="#07 - Comunicação Direta" colorbottom="#c68642" colorborder="#000">
                <Pai sobrenome="Quintanilha"></Pai>
            </Card>

            <Card titulo="#06 - Condicional Com IF" colorbottom="#fe8a71" colorborder="#000">
                <CondicionalIf numero={9}></CondicionalIf>
            </Card>

            <Card titulo="#05 - Condicional Ternario" colorbottom="#7bc043" colorborder="#000">
                <Condicional numero={10}></Condicional>
            </Card>

            <Card titulo="#04 - Repetição" colorbottom="#4b86b4" colorborder="#000">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#03 - Componenete Com Parametro" colorbottom="#ffa700" colorborder="#000">
                <ComParametro titulo="Esse é o título"
                    subtitulo="esse é o subtitulo" />
            </Card>
            <Card titulo="#02 - Componenete Com Filho" colorbottom="#5e5656" colorborder="#000">
                <ComFilhos>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#01 - Primeiro Componente" colorbottom="#3d2352" colorborder="#000">
                <Primeiro />
            </Card>

        </div>

    </div>
);