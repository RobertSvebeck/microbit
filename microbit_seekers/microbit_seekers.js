radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
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
            if (Sender1Reciever2 == 1) {
                secretNumber = receivedNumber
            }
            
            basic.showNumber(secretNumber)
            basic.pause(5000)
            questStarted = 0
            Sender1Reciever2 = 0
            secretNumber = 0
            basic.clearScreen()
        }
        
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (questStarted == 0) {
        questStarted = 1
        Sender1Reciever2 = 1
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (questStarted == 0) {
        secretNumber = randint(1, 9)
        basic.pause(5000)
        basic.showNumber(secretNumber)
        basic.clearScreen()
        questStarted = 1
        Sender1Reciever2 = 2
    }
    
})
let signal = 0
let secretNumber = 0
let questStarted = 0
let Sender1Reciever2 = 0
Sender1Reciever2 = 0
questStarted = 0
secretNumber = 0
radio.setTransmitPower(7)
radio.setGroup(1)
basic.forever(function on_forever() {
    if (questStarted == 1) {
        radio.sendNumber(secretNumber)
    }
    
})
