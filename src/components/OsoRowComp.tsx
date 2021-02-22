import React from "react";
import OsoSquare from "../scripts/OsoSquare";
import OsoSquareComp from "./OsoSquareComp";
import OsoMatch from "../scripts/OsoMatch";
import "../styles/OsoRow.sass"

interface Props {
    tableRow: OsoSquare[]
    matches: OsoMatch[]
}

export default class OsoRowComp extends React.Component<Props, Record<string, never>> {
    render(): React.ReactNode {
        const row = this.props.tableRow
        const matches = this.props.matches
        return (
            <div className="OsoRow">
                { row.map((square, colIndex) => {
                    const crossed = !!matches.find(match => match.contains(square.position))
                    return <OsoSquareComp key={colIndex} square={square} crossed={crossed}/>
                }) }
            </div>
        )
    }
}