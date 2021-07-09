def zz():
    while (zahl1 == zahl2):
        zahl1=Math.round(Math.random()*20)
        zahl2=Math.round(Math.random()*20)
    return (zahl1, zahl2)

def tausch(x,y):
    x=x+y
    y=x-y
    x=x-y
    return(x, y)

while True:
    (z1, z2)=zz()
    if (z1>z2):
         (y1, y2)=tausch(z1,z2)
    basic.show_number(y1)
    basic.show_number(y2)
    
    