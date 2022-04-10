radio.onReceivedNumber(function (receivedNumber) {
    if (questStarted == 0) {
        questStarted = 1
        SenderReciever = 1
    }
    if (questStarted == 1 && SenderReciever == 2) {
        NumberOfLedsShow = Math.round((100 + 42 + radio.receivedPacket(RadioPacketProperty.SignalStrength)) / 4)
        if (NumberOfLedsShow == 10 && SenderReciever == 2) {
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
        if (NumberOfLedsShow <= 24) {
            PlotedLeds = 0
            basic.clearScreen()
            for (let y = 0; y <= 4; y++) {
                for (let x = 0; x <= 4; x++) {
                    PlotedLeds += 1
                    if (PlotedLeds >= NumberOfLedsShow) {
                        break;
                    }
                    led.plot(x, y)
                }
            }
        } else {
            basic.clearScreen()
            if (SenderReciever = 1) {
                secretNumber = receivedNumber
            }
            music.playMelody("G B A G C5 B A B ", 180)
            basic.showNumber(secretNumber)
            basic.pause(5000)
            questStarted = 0
            SenderReciever = 0
            secretNumber = 0
            NumberOfLedsShow = 0
            PlotedLeds = 0
            NumberOfLedsShow = 0
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (questStarted == 0) {
        music.playMelody("C5 B A G F E D C ", 180)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        secretNumber = randint(1, 9)
        basic.showNumber(secretNumber)
        music.playMelody("C D E F G A B C5 ", 180)
        basic.pause(5000)
        basic.clearScreen()
        questStarted = 1
        SenderReciever = 2
    } else {
        music.playMelody("C5 A B G A F G E ", 180)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
    }
})
let secretNumber = 0
let questStarted = 0
let NumberOfLedsShow = 0
let PlotedLeds = 0
let SenderReciever = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
PlotedLeds = 0
NumberOfLedsShow = 0
SenderReciever = 0
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
questStarted = 0
secretNumber = 0
radio.setTransmitPower(7)
radio.setGroup(1)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.clearScreen()
basic.forever(function () {
    if (questStarted == 1) {
        radio.sendNumber(secretNumber)
    }
})
