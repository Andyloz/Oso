import React, { Component } from "react"
import ReactDOM from "react-dom"
import OsoGameComp from "./components/OsoGameComp"
import "./styles/index.sass"

class Root extends Component {
    render(): React.ReactNode {
        return <OsoGameComp/>
    }
}

const container = document.getElementById("root")
ReactDOM.render(<Root/>, container)