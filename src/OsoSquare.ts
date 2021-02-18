import OsoValue from "./OsoValue";
import Point from "./Point";

export default class OsoSquare {
    public value: OsoValue
    readonly position: Point

    constructor(value: OsoValue, position: Point) {
        this.value = value
        this.position = position
    }
}