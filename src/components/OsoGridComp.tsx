import OsoGrid from "../scripts/OsoGrid";
import React from "react";
import "./OsoGame.sass"
import { reverseMap } from "../scripts/utilities";
import OsoRowComp from "./OsoRowComp";
import OsoMatch from "../scripts/OsoMatch";
import "./OsoGrid.sass"

interface Props {
    table: OsoGrid
    matches: OsoMatch[]
}

export default class OsoGridComp extends React.Component<Props, Record<string, never>> {
    render(): React.ReactNode {
        const grid = this.props.table.grid
        const matches = this.props.matches
        return (
            <div className="OsoGrid">
                { reverseMap(grid, (row, rowIndex) => {
                    const rowMatches = matches.filter(match => {
                        return !![match.pointA, match.middlePoint, match.pointB].find(point => point.y === rowIndex)
                    })
                    return <OsoRowComp key={rowIndex} tableRow={row} matches={rowMatches}/>
                }) }
            </div>
        )
    }
}