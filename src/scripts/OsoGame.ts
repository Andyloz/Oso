import OsoGrid from "./OsoGrid";
import OsoMatch from "./OsoMatch";
import GridScanner from "./GridScanner";
import Point from "./Point";
import OsoValue from "./OsoValue";

export class OsoGame {
    readonly table: OsoGrid
    readonly matches: Array<OsoMatch>

    constructor(cols: number, rows: number) {
        this.table = new OsoGrid(cols, rows)
        this.matches = []
    }

    solitaire() {
        const scanner = new GridScanner()
        const grid = this.table.grid

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                const pointA = new Point(x, y)
                const aSquare = grid[y][x]

                if (aSquare.value === OsoValue.O) {
                    scanner.position = pointA
                    let roundCoords = scanner.getBoundaryCoords(grid, 1, GridScanner.movementCoordsGens.square)
                    let relatedMatches = this.matches.filter(match => match.contains(pointA))

                    for (const middleCoord of roundCoords) {
                        const middleSquare = grid[middleCoord.y][middleCoord.x]

                        if (middleSquare.value === OsoValue.S) {
                            const pointB = middleCoord.move(pointA.distanceBetween(middleCoord))

                            if (scanner.coordIsValid(grid, pointB)) {
                                const bSquare = grid[pointB.y][pointB.x]

                                if (bSquare.value === OsoValue.O) {
                                    relatedMatches = relatedMatches.filter(match => match.contains(pointB))

                                    if (relatedMatches.length === 0) {
                                        this.matches.push(new OsoMatch(pointA, pointB))
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