def on_received_number(receivedNumber):
    global NumberOfLedsShow, PlotedLeds, secretNumber, questStarted, Sender1Reciever2
    if questStarted == 1:
        NumberOfLedsShow = Math.round((100 + 42 + radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)) / 4)
        if NumberOfLedsShow <= 24:
            PlotedLeds = 0
            basic.clear_screen()
            for y in range(5):
                for x in range(5):
                    PlotedLeds += 1
                    if PlotedLeds >= NumberOfLedsShow:
                        break
                    led.plot(x, y)
        else:
            basic.clear_screen()
            if Sender1Reciever2 == 1:
                secretNumber = receivedNumber
            basic.show_number(secretNumber)
            basic.pause(5000)
            questStarted = 0
            Sender1Reciever2 = 0
            secretNumber = 0
            NumberOfLedsShow = 0
            PlotedLeds = 0
            NumberOfLedsShow = 0
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

secretNumber = 0
questStarted = 0
Sender1Reciever2 = 0
NumberOfLedsShow = 0
PlotedLeds = 0
PlotedLeds = 0
NumberOfLedsShow = 0
Sender1Reciever2 = 0
questStarted = 0
secretNumber = 0
radio.set_transmit_power(7)
radio.set_group(1)

def on_forever():
    if questStarted == 1:
        radio.send_number(secretNumber)
basic.forever(on_forever)
