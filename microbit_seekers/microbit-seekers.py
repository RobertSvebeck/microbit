def on_received_number(receivedNumber):
    global signal, secretNumber, questStarted, Sender1Reciever2
    if questStarted == 1:
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
            if Sender1Reciever2 == 1:
                secretNumber = receivedNumber
            basic.show_number(secretNumber)
            basic.pause(5000)
            questStarted = 0
            Sender1Reciever2 = 0
            secretNumber = 0
            basic.clear_screen()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global questStarted, Sender1Reciever2
    if questStarted == 0:
        questStarted = 1
        Sender1Reciever2 = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global secretNumber, questStarted, Sender1Reciever2
    if questStarted == 0:
        secretNumber = randint(1, 9)
        basic.pause(5000)
        basic.show_number(secretNumber)
        basic.clear_screen()
        questStarted = 1
        Sender1Reciever2 = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

signal = 0
secretNumber = 0
questStarted = 0
Sender1Reciever2 = 0
Sender1Reciever2 = 0
questStarted = 0
secretNumber = 0
radio.set_transmit_power(7)
radio.set_group(1)

def on_forever():
    if questStarted == 1:
        radio.send_number(secretNumber)
basic.forever(on_forever)
