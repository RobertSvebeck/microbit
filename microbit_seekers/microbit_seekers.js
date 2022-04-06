radio.onReceivedNumber(function (receivedNumber) {
    if (questStarted == 1) {
        NumberOfLedsShow = Math.round((100 + 42 + radio.receivedPacket(RadioPacketProperty.SignalStrength)) / 4)
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
            if (Sender1Reciever2 == 1) {
                secretNumber = receivedNumber
            }
            basic.showNumber(secretNumber)
            basic.pause(5000)
            questStarted = 0
            Sender1Reciever2 = 0
            secretNumber = 0
            NumberOfLedsShow = 0
            PlotedLeds = 0
            NumberOfLedsShow = 0
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (questStarted == 0) {
        questStarted = 1
        Sender1Reciever2 = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (questStarted == 0) {
        secretNumber = randint(1, 9)
        basic.pause(5000)
        basic.showNumber(secretNumber)
        basic.clearScreen()
        questStarted = 1
        Sender1Reciever2 = 2
    }
})
let secretNumber = 0
let questStarted = 0
let Sender1Reciever2 = 0
let NumberOfLedsShow = 0
let PlotedLeds = 0
PlotedLeds = 0
NumberOfLedsShow = 0
Sender1Reciever2 = 0
questStarted = 0
secretNumber = 0
radio.setTransmitPower(7)
radio.setGroup(1)
basic.forever(function () {
    if (questStarted == 1) {
        radio.sendNumber(secretNumber)
    }
})
