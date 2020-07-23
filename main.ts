input.onButtonPressed(Button.A, function () {
    if (X != 0) {
        led.unplot(X, 4)
        X += -1
        led.plot(X, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (X != 4) {
        led.unplot(X, 4)
        X += 1
        led.plot(X, 4)
    }
})
let Ypion = 0
let X = 0
X = 0
led.plot(X, 4)
let Xpion = randint(0, 4)
led.plot(Xpion, Ypion)
basic.forever(function () {
    if (Ypion > 4) {
        Ypion = -1
        Xpion = randint(0, 4)
    }
    basic.pause(300)
    led.unplot(Xpion, Ypion)
    Ypion += 1
    led.plot(Xpion, Ypion)
    if (Ypion == 4 && Xpion == X) {
        Ypion = -1
        Xpion = randint(0, 4)
    }
    if (Ypion > 4) {
        basic.showString("perdu")
        basic.pause(500)
        X = 0
        led.plot(X, 4)
        basic.pause(500)
    }
})
