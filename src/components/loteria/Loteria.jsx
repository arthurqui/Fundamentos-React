import React, { useState } from "react"


export default (props) => {    
    
    
    const [nome, setTexto] = useState('')
    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))

    function gerarNumerosNaoContidos(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero)
            ? gerarNumerosNaoContidos(array)
            : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumero)
            .fill(0)
            .reduce(a => [...a, gerarNumerosNaoContidos(a)], [])
            .sort((a, b) => a - b)
        setNumeros(novoArray)
    }


    
    return (
        <>
            <h3>Loteria</h3>

            


            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>


        </>

    );

};

