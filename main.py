def zz():
    zahl1=0
    zahl2=0
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
    if input.button_is_pressed(Button.A):
        (z1, z2)=zz()
        if z1>z2:
            (a1, a2) = tauschen(z1,z2)
        else:
            a1=z1
            a2=z2
        basic.set_led_color(0xff0000)
        basic.show_number(a1)
        basic.set_led_color(0x00ff00)
        basic.show_number(a2)
        basic.set_led_color(0x000000)
