import OsoGrid from "../scripts/OsoGrid";
import React from "react";
import OsoSquareComp from "./OsoSquareComp";
import "./OsoGame.sass"

interface Props {
    table: OsoGrid
}

export default class OsoGridComp extends React.Component<Props, Record<string, never>> {
    render(): React.ReactNode {
        const grid = this.props.table.grid

        const rows = grid.map((row, rowIndex) => {
            let components = row.map((square, colIndex) => {
                return <OsoSquareComp key={`${colIndex}-${rowIndex}`} square={square}/>
            })
            components = components.reverse()
            return (
                <div key={rowIndex} className="OsoRow">
                    { components }
                </div>
            )
        })

        return (
            <div className="OsoGrid">
                { rows }
            </div>
        )
    }
}