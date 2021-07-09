function zz(): number[] {
    let zahl1: number;
    let zahl2: number;
    while (zahl1 == zahl2) {
        zahl1 = Math.round(Math.random() * 20)
        zahl2 = Math.round(Math.random() * 20)
    }
    return [zahl1, zahl2]
}

function tausch(x: number, y: number): number[] {
    x = x + y
    y = x - y
    x = x - y
    return [x, y]
}

while (true) {
    let [z1, z2] = zz()
    if (z1 > z2) {
        let [y1, y2] = tausch(z1, z2)
    }
    
    basic.showNumber(y1)
    basic.showNumber(y2)
}
