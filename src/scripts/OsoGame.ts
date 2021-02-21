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
        const lastY = grid.length - 1
        const lastX = grid[0].length - 1

        for (let y = 0; y < grid.length; y++) {
            const atYBorder = y === 0 || y === lastY

            for (let x = 0; x < grid[y].length; x++) {
                const atXBorder = x === 0 || x === lastX
                if (atYBorder && atXBorder) {
                    continue
                }

                const middlePoint = new Point(x, y)
                const middleSquare = grid[y][x]

                if (middleSquare.value === OsoValue.S) {
                    const matchBPoints: Point[] = []
                    scanner.position = new Point(x, y)
                    const roundCoords = scanner.getBoundaryCoords(grid, 1, GridScanner.movementCoordsGens.square)

                    for (const pointA of roundCoords) {
                        if (!matchBPoints.find(matchedPoint => matchedPoint.equals(pointA))) {
                            const aSquare = grid[pointA.y][pointA.x]

                            if (aSquare.value === OsoValue.O) {
                                const moveMidToA = middlePoint.distanceBetween(pointA)
                                const pointB = middlePoint.move(new Point(-moveMidToA.x, -moveMidToA.y))

                                if (scanner.coordIsValid(grid, pointB)) {
                                    const bSquare = grid[pointB.y][pointB.x]

                                    if (bSquare.value === OsoValue.O) {
                                        this.matches.push(new OsoMatch(pointA, pointB))
                                        matchBPoints.push(pointB)
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