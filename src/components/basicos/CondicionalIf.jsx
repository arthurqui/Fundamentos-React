import React from "react"
import If from "./If"


export default props => {

    return (
        <div>
            <h2> O numero é {props.numero}</h2>
            <If test = {props.numero % 2 === 0 && props.numero !==0}>
                <span>Par</span>

            </If>

            <If test = {props.numero % 2 === 1 && props.numero !==0 }>
                <span>Impar</span>

            </If>

            <If test = {props.numero === 0}>
                <span>0 é nulo</span>

            </If>

        </div>

    )

}