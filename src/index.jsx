import React, { Component } from "react"
import ReactDOM from "react-dom"
import Point from "./scripts/Point";
import "./index.sass"

class Root extends Component {
    render() {
        const a = new Point(0, 0)
        return <h1>Hola mundo !!! {a.toString()}</h1>
    }
}

const container = document.getElementById("root")
ReactDOM.render(<Root/>, container)