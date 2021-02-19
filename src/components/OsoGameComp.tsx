import OsoGame from "../scripts/OsoGame";
import React from "react";
import OsoGridComp from "./OsoGridComp";
import OsoMatch from "../scripts/OsoMatch";

interface Props {
    game: OsoGame
}

interface State {
    matches: OsoMatch[]
}

export default class OsoGameComp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { matches: this.props.game.matches }
        this.handleSolitaire = this.handleSolitaire.bind(this)
    }

    handleSolitaire(e: React.MouseEvent<HTMLButtonElement>): void {
        this.props.game.solitaire()
        this.setState({ matches: this.props.game.matches })
    }

    render(): React.ReactNode {
        return (
            <div>
                <OsoGridComp table={this.props.game.table} matches={this.state.matches}/>
                <button onClick={this.handleSolitaire}>Solitaire</button>
            </div>
        )
    }
}