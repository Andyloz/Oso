export default class GridScannerError extends Error {
  constructor(radius: number) {
    super(`Radius less or equal than 0 is invalid (provided: ${radius})`);
    this.name = 'GridScannerError'
  }
}