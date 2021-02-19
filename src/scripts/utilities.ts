export const Random = {
    getNumber(min: number, maxExclusive: number): number {
        return Math.random() * (maxExclusive - min) + min
    },

    getInteger(min: number, maxExclusive: number): number {
        return Math.floor(this.getNumber(min, maxExclusive))
    }
}

export function reverseMap<T, O>(arg: T[], fn: (a: T) => O): O[] {
    return arg.map((_, i, arr) => fn(arr[arr.length - i - 1]))
}
