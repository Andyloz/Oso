import Point from "./Point";

export default class Line {
    public pointA: Point
    public pointB: Point

    constructor(pointA: Point, pointB: Point) {
        this.pointA = pointA
        this.pointB = pointB
    }

    equals(other: Line) {
        return (this.pointA.equals(other.pointA) && this.pointB.equals(other.pointB)) ||
            (this.pointA.equals(other.pointB) && this.pointB.equals(other.pointA))
    }
}