let a1: number;
let a2: number;
function zz(): number[] {
    let zahl1 = 0
    let zahl2 = 0
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
    } else {
        a1 = z1
        a2 = z2
    }
    
    basic.setLedColor(0xff0000)
    basic.showNumber(z1)
    basic.setLedColor(0x00ff00)
    basic.showNumber(z2)
}
