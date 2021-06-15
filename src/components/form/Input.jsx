import React, { useState } from "react"

export default (props) => {
    const [nome, setTexto] = useState('')


    return (
        <>
            <h3>Texto digitado: {nome}</h3>
            <input type="text" value={nome}
                onChange={e => setTexto(e.target.value)}
            />


        </>

    );

};

