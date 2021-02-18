export default class Point {
  public x: number;

  public y: number;

  constructor(x: number, y:number) {
    this.x = x;
    this.y = y;
  }

  move(movement: Point): Point {
    const clone = this.clone();
    clone.x += movement.x;
    clone.y += movement.y;
    return clone;
  }

  distanceBetween(other: Point): Point {
    return new Point(other.x - this.x, other.y - this.y);
  }

  equals(other: Point): boolean {
    return this.x === other.x &&
      this.y === other.y;
  }

  clone(): Point {
    return new Point(this.x, this.y);
  }

  toString(): string {
    return `{ x: ${this.x}, y: ${this.y} }`;
  }
}