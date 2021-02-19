import OsoGrid from "../scripts/OsoGrid";
import React from "react";
import "./OsoGame.sass"
import { reverseMap } from "../scripts/utilities";
import OsoRowComp from "./OsoRowComp";

interface Props {
    table: OsoGrid
}

export default class OsoGridComp extends React.Component<Props, Record<string, never>> {
    render(): React.ReactNode {
        const grid = this.props.table.grid
        return (
            <div className="OsoGrid">
                { reverseMap(grid, (row, rowIndex) => {
                    return <OsoRowComp key={rowIndex} tableRow={row}/>
                }) }
            </div>
        )
    }
}