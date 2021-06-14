import './App.css'
import React from 'react'


import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalIf from './components/CondicionalIf'

export default (props) => (
    <div className="App">
        <Card titulo="#06 - Condicional Com IF">
            <CondicionalIf numero={9}></CondicionalIf>
        </Card>

        <Card titulo="#05 - Condicional Ternario">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componenete Com Parametro">
            <ComParametro titulo="Esse é o título"
                subtitulo="esse é o subtitulo" />
        </Card>
        <Card titulo="#02 - Componenete Com Filho">
            <ComFilhos>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>



        {/*  */}
        {/* <Primeiro/>
    
    <ComParametro titulo = "Outro titulo" 
    subtitulo = "esse é o outro subtitulo" /> */}
    </div>
);