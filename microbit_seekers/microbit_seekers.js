radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
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
    }
    
})
let signal = 0
radio.setTransmitPower(7)
radio.setGroup(1)
basic.forever(function on_forever() {
    radio.sendNumber(0)
})
