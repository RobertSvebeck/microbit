radio.onReceivedNumber(function (receivedNumber) {
    if (questStarted == 1) {
        signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        if (signal < -90) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (signal < -77) {
            basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (signal < -72) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (signal < -68) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (signal < -62) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
        } else if (signal < -45) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            secretNumber = receivedNumber
            basic.showNumber(secretNumber)
            basic.pause(5000)
            questStarted = 0
        }
    }
})
input.onButtonPressed(Button.A, function () {
    questStarted = 1
})
input.onButtonPressed(Button.B, function () {
    if (questStarted == 0) {
        secretNumber = randint(0, 9)
        questStarted = secretNumber
        basic.pause(5000)
        basic.showNumber(0)
        basic.clearScreen()
    }
})
let signal = 0
let secretNumber = 0
let questStarted = 0
questStarted = 0
secretNumber = 0
radio.setTransmitPower(7)
radio.setGroup(1)
basic.forever(function () {
    if (questStarted == 1) {
        radio.sendNumber(secretNumber)
    }
})
