export const Random = {
    getNumber(min: number, maxExclusive: number) {
        return Math.random() * (maxExclusive - min) + min
    },

    getInteger(min: number, maxExclusive: number) {
        return Math.floor(this.getNumber(min, maxExclusive))
    }
}
