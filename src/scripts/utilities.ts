export const Random = {
    getNumber(min: number, maxExclusive: number): number {
        return Math.random() * (maxExclusive - min) + min
    },

    getInteger(min: number, maxExclusive: number): number {
        return Math.floor(this.getNumber(min, maxExclusive))
    }
}

export function reverseMap<T, O>(arg: T[], fn: (a: T, index: number, arr: T[]) => O): O[] {
    return arg.map((_, i, arr) => {
        i = arr.length - i - 1
        return fn(arr[i], i, arr)
    })
}

export const Input = {
    getInteger(elem: HTMLInputElement): number | null {
        const input = elem.value || ""
        const parsed = parseInt(input)

        if (!Number.isNaN(parsed)) {
            return parsed
        } else {
            return null
        }
    }
}
