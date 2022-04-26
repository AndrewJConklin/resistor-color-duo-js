export const colorList = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
}

export function decodedValue(colors) {
    let id = ""
    for (let i = 0; i < 2; i++) {
        id = id + `${colorList[colors[i]]}`
    }
    return +id
}
