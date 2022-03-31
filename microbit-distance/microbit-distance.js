radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    basic.showNumber(signal)
})
let signal = 0
radio.setTransmitPower(7)
radio.setGroup(1)
basic.forever(function on_forever() {
    radio.sendNumber(0)
})
