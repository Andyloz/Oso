import React from "react";
import OsoSquare from "../scripts/OsoSquare";
import OsoSquareComp from "./OsoSquareComp";

interface Props {
    tableRow: OsoSquare[]
}

export default class OsoRowComp extends React.Component<Props, Record<string, never>> {
    render(): React.ReactNode {
        return (
            <div className="OsoRow">
                { this.props.tableRow.map((square, colIndex) => {
                    return <OsoSquareComp key={colIndex} square={square}/>
                }) }
            </div>
        )
    }
}