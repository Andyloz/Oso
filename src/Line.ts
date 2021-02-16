import Point from "./Point";

export default class Line {
    public pointA: Point
    public pointB: Point

    constructor(pointA: Point, pointB: Point) {
        this.pointA = pointA
        this.pointB = pointB
    }
}