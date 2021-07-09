def zz():
    while (zahl1 == zahl2):
        zahl1=Math.round(Math.random()*20)
        zahl2=Math.round(Math.random()*20)
    return (zahl1, zahl2)

def tauschen(x1,y1):
    x1=x1+y1
    y1=x1-y1
    x1=x1-y1
    return(x1, y1)

while True:
    (z1, z2)=zz()
    if z1>z2:
        (a1, a2)= tauschen(z1,z2)
    basic.show_number(a1)
    basic.show_number(a2)