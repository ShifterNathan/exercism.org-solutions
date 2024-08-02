export function decodedValue(colors: string[]): number | undefined {
    let index: number[] = []
    for (let i = 0; i < 2 && i < colors.length; i++) {
        const color = colors[i]
        const colorsIndex = COLORS.indexOf(color);
        index.push(colorsIndex)
    }
    const resistanceNumber = Number(index.join(""));
    return resistanceNumber;
}
export const COLORS: string[] = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
]