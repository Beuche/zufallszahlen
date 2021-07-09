function zz(): number[] {
    let zahl1: number;
    let zahl2: number;
    while (zahl1 == zahl2) {
        zahl1 = Math.round(Math.random() * 20)
        zahl2 = Math.round(Math.random() * 20)
    }
    return [zahl1, zahl2]
}

function tauschen(x1: number, y1: number): number[] {
    x1 = x1 + y1
    y1 = x1 - y1
    x1 = x1 - y1
    return [x1, y1]
}

while (true) {
    let [z1, z2] = zz()
    if (z1 > z2) {
        let [a1, a2] = tauschen(z1, z2)
    }
    
    basic.showNumber(a1)
    basic.showNumber(a2)
}
