import Line from "./Line";
import Point from "./Point";

export class OsoMatchError extends Error {
    readonly pointA: Point
    readonly pointB: Point
    constructor(pointA: Point, pointB: Point) {
        super(`Impossible match (points provided: ${pointA}, ${pointB})`);
        this.pointA = pointA
        this.pointB = pointB
    }
}


export default class OsoMatch extends Line {
    constructor(pointA: Point, pointB: Point) {
        const distance = pointA.distanceBetween(pointB)
        let coords = [distance.x, distance.y]
        coords = coords.filter(num => {
            num = Math.abs(num)
            return num !== 0 && num !== 2
        })

        if (coords.length > 0) {
            throw new OsoMatchError(pointA, pointB)
        }
        super(pointA, pointB);
    }

    contains(point: Point): boolean {
        let found = super.contains(point)
        if (!found) {
            const distance = this.pointA.distanceBetween(this.pointB)
            const middlePoint = this.pointA.move(new Point(Math.abs(distance.x / 2), Math.abs(distance.y / 2)))
            console.log(middlePoint)
            found = point.equals(middlePoint)
        }
        return found
    }
}