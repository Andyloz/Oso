import Point from "./Point";

export class GridScannerError extends Error {
    constructor(radius: number) {
        super(`Radius less or equal than 0 is invalid (provided: ${radius})`);
        this.name = 'GridScannerError'
    }
}

function radiusChecker(radius: number) {
    if (!Number.isInteger(radius) || radius <= 0) {
        throw new GridScannerError(radius)
    }
}

type MovementCoordsGen = (radius: number) => Generator<Point>



export default class GridScanner {
    public position: Point
    public static movementCoordsGens: {
        [key: string]: MovementCoordsGen
    };

    constructor(postition: Point | undefined = undefined) {
        if (postition) this.position = postition
        else this.position = new Point(0, 0)
    }

    coordIsValid(grid: Array<Array<unknown>>, coord: Point):boolean {
        return !!grid[coord.x] && !!grid[coord.x][coord.y]
    }

    *getBoundaryCoords(grid: Array<Array<unknown>>, radius: number, movementCoordsGen: MovementCoordsGen): Generator<Point> {
        radiusChecker(radius)

        const moves = movementCoordsGen(radius)
        for (const movement of moves) {
            const boundCoord = this.position.move(movement)
            if (this.coordIsValid(grid, boundCoord))
                yield boundCoord
        }
    }
}

GridScanner.movementCoordsGens = {
    *diagonal(radius) {
        radiusChecker(radius)
        //    *
        //   *·*    r = 3
        //  *···*
        // *··0··*
        //  *···*
        //   *·*
        //    *
        const nextClockSide = (coord: Point) => new Point(coord.y, -coord.x)

        const side: Array<Point> = []
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < radius + 1; j++) {
                if (i === 0) {
                    side.push(new Point(j, radius - j))
                } else {
                    side[j] = nextClockSide(side[j])
                }

                if (j < radius) { // if is not the last coord of his side
                    yield side[j]
                }
            }
        }
    },

    *square(radius) {
        radiusChecker(radius)
        // *******
        // *·····*    r = 3
        // *·····*
        // *··0··*
        // *·····*
        // *·····*
        // *******
        for (let x = -radius; x <= radius; x++) {
            yield new Point(x, radius)
            yield new Point(x, -radius)
        }
        for (let y = -radius + 1; y < radius; y++) {
            yield new Point(radius, y)
            yield new Point(-radius, y)
        }
    }
}