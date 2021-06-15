import React from "react"
import Filho from "./Filho"
export default props =>

<div>
<Filho {...props}>Arthur</Filho>
<Filho sobrenome ={props.sobrenome}>Rosana</Filho>
<Filho sobrenome ="Quintanilha">Sophia</Filho>
</div>