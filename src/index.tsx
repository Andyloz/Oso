import React, { Component } from "react"
import ReactDOM from "react-dom"
import OsoGameComp from "./components/OsoGameComp"
import OsoGame from "./scripts/OsoGame"

class Root extends Component {
    render(): React.ReactNode {
        return <OsoGameComp game={new OsoGame(5, 5)}/>
    }
}

const container = document.getElementById("root")
ReactDOM.render(<Root/>, container)