import OsoGrid from "../scripts/OsoGrid";
import React from "react";
import OsoSquareComp from "./OsoSquareComp";
import "./OsoGame.sass"
import { reverseMap } from "../scripts/utilities";

interface Props {
    table: OsoGrid
}

export default class OsoGridComp extends React.Component<Props, Record<string, never>> {
    render(): React.ReactNode {
        const grid = this.props.table.grid
        return (
            <div className="OsoGrid">
                { reverseMap(grid, (row, rowIndex) => {
                    return (
                        <div key={rowIndex} className="OsoRow">
                            { row.map((square, colIndex) => {
                                return <OsoSquareComp key={`${rowIndex}-${colIndex}`} square={square}/>
                            }) }
                        </div>
                    )
                }) }
            </div>
        )
    }
}