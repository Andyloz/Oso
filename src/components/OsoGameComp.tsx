import OsoGame from "../scripts/OsoGame";
import React from "react";
import OsoGridComp from "./OsoGridComp";

interface Props {
    game: OsoGame
}

export default class OsoGameComp extends React.Component<Props, Record<string, never>> {
    render(): React.ReactNode {
        return <OsoGridComp table={this.props.game.table}/>
    }
}