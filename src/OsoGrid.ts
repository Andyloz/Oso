import OsoSquare from "./OsoSquare";
import OsoValue from "./OsoValue";
import Point from "./Point";
import {Random} from "./utilities";

export default class OsoGrid {
    readonly grid: Array<Array<OsoSquare>>
    static readonly FILLED_PERCENTAGE = 0.6

    constructor(cols: number, rows: number) {
        this.grid = []
        for (let y = 0; y < rows; y++) {
            const row: Array<OsoSquare> = []
            this.grid.push(row)
            for (let x = 0; x < cols; x++) {
                row.push(new OsoSquare(OsoValue.EMPTY, new Point(x, y)))
            }
        }

        const filledSquaresNum = cols * rows * OsoGrid.FILLED_PERCENTAGE
        const filling = [
            { value: OsoValue.O, number: filledSquaresNum / 3 * 2 },
            { value: OsoValue.S, number: filledSquaresNum / 3 }
        ]

        for (const {value, number} of filling) {
            for (let i = 0; i < number;) {
                const x = Random.getInteger(0, this.cols)
                const y = Random.getInteger(0, this.rows)
                if (this.grid[y][x].value === OsoValue.EMPTY) {
                    this.grid[y][x].value = value
                    i++
                }
            }
        }
    }

    get cols() {
        return this.grid[0].length
    }

    get rows() {
        return this.grid.length
    }
}
