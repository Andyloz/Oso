import OsoSquare from "../scripts/OsoSquare";
import React from "react";

interface Props {
    square: OsoSquare
    crossed: boolean
}

export default class OsoSquareComp extends React.Component<Props, Record<string, never>> {
    render(): React.ReactNode {
        const crossed = this.props.crossed
        return (
            <div className={`OsoSquare${crossed ? " crossed" : ""}`}>
                <span>{ this.props.square.value }</span>
            </div>
        )
    }
}