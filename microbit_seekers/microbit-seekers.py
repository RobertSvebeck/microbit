def on_received_number(receivedNumber):
    global signal
    signal = radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
    if signal < -90:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
    elif signal < -77:
        basic.show_leds("""
            . . . . .
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
    elif signal < -72:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # # # #
                        # # # # #
                        # # # # #
        """)
    elif signal < -68:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # # # #
                        # # # # #
                        # # # # #
        """)
    elif signal < -62:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
                        # # # # #
        """)
    elif signal < -45:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
        """)
    else:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
radio.on_received_number(on_received_number)

signal = 0
radio.set_transmit_power(7)
radio.set_group(1)

def on_forever():
    radio.send_number(0)
basic.forever(on_forever)
