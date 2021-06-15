import React from 'react'
import './Card.css'

export default props =>
    <div className="Card" style = {{borderColor: props.colorborder || '#000'}}>
        <div className="Conteudo">
            {props.children}
        </div>

        <div className="Footer" style = {{backgroundColor: props.colorbottom || '#000'}}>
            {props.titulo}
        </div>
    </div>