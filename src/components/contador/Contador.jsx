import React, { Component } from "react"

export default class Contador extends Component {

    constructor(props) {
        super(props)


        this.state = {
            passo: this.props.passo || 1,
            valor: this.props.valor || 0,
        }
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo

        })

    }

    dec = () => {
        this.setState({
            valor: this.state.valor > 0 ?
                this.state.valor - this.state.passo
                : this.state.valor = 0


        })


    }

    zerar = () => {
        this.setState({
            valor: this.state.valor = 0
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h4>De {this.state.passo} em {this.state.passo}</h4>
                <div>

                    <label for="passoInput" style= {{fontSize: '1.4rem',fontWeight:'600'}}>Mudar o passo: </label>
                    <input id="passoInput" type="number" style= {{fontSize: '1.2rem', width:'50px'}} value={this.state.passo} 
                    on onChange={e => this.setState({ passo: this.state.passo < 1 ? this.props.passo : +e.target.value })}/>

                </div>

                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.zerar}>0</button>
                </div>
            </div>
        )

    }
}