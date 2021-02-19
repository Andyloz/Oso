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
    }

    handleClick(_: React.MouseEvent<HTMLButtonElement>): void {
        return undefined
    }

    render(): React.ReactNode {
        return (
            <div>
                <OsoGridComp table={this.props.game.table}/>
                <button>Solitaire</button>
            </div>
        )
    }
}