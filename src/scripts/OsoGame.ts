import OsoGrid from "./OsoGrid";
import OsoMatch from "./OsoMatch";
import GridScanner from "./GridScanner";
import Point from "./Point";
import OsoValue from "./OsoValue";

export default class OsoGame {
    readonly table: OsoGrid
    readonly matches: Array<OsoMatch>

    constructor(cols: number, rows: number) {
        this.table = new OsoGrid(cols, rows)
        this.matches = []
    }

    solitaire(): void {
        const scanner = new GridScanner()
        const grid = this.table.grid

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                const middlePoint = new Point(x, y)
                const middleSquare = grid[y][x]

                if (middleSquare.value === OsoValue.S) {
                    scanner.position = new Point(x, y)
                    const roundCoords = scanner.getBoundaryCoords(grid, 1, GridScanner.movementCoordsGens.square)

                    for (const pointA of roundCoords) {
                        const aSquare = grid[pointA.y][pointA.x]

                        if (aSquare.value === OsoValue.O) {
                            const moveMidToA = middlePoint.distanceBetween(pointA)
                            const pointB = middlePoint.move(new Point(-moveMidToA.x, -moveMidToA.y))

                            if (scanner.coordIsValid(grid, pointB)) {
                                const bSquare = grid[pointB.y][pointB.x]

                                if (bSquare.value === OsoValue.O) {
                                    const match = new OsoMatch(pointA, pointB)

                                    if (!this.matches.find(match => match.equals(match))) {
                                        this.matches.push(match)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}