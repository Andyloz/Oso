export default class Point {
    public x: number;
    public y: number;

    constructor(x: number, y:number) {
        this.x = x
        this.y = y
    }

    move(movement: Point) {
        const clone = this.clone()
        clone.x += movement.x
        clone.y += movement.y
        return clone
    }

    distanceBetween(other: Point) {
        return new Point(other.x - this.x, other.y - this.y)
    }

    equals(other: Point) {
        return this.x === other.x &&
            this.y === other.y
    }

    clone() {
        return new Point(this.x, this.y)
    }

    toString() {
        return `{ x: ${this.x}, y: ${this.y} }`
    }
}