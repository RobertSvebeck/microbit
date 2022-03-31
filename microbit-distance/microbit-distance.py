def on_received_number(receivedNumber):
    global signal
    signal = radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
    basic.show_number(signal)
radio.on_received_number(on_received_number)

signal = 0
radio.set_transmit_power(7)
radio.set_group(1)

def on_forever():
    radio.send_number(0)
basic.forever(on_forever)
