import React, { Component } from "react"
import ReactDOM from "react-dom"

class Root extends Component {
    render() {
        return <h1>Hola mundo !!!</h1>
    }
}

const container = document.getElementById("root")
ReactDOM.render(<Root/>, container)