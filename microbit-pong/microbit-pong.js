
input.onButtonPressed(Button.A, function () {
    if (bar_x > 0) {
        led.unplot(bar_x + 1, 4)
        bar_x = bar_x - 1
        led.plot(bar_x, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    point = 0
    interval = 500
    interval_step = 10
    ball_x = 3
    ball_y = 4
    ball_dx = -1
    ball_dy = -1
    bar_x = 0
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    music.playTone(988, music.beat(BeatFraction.Double))
    basic.showLeds(`
        . . # . .
        . . . . .
        # . . . #
        . . . . .
        . . # . .
        `)
    in_game = true
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    if (bar_x < 3) {
        led.unplot(bar_x, 4)
        bar_x = bar_x + 1
        led.plot(bar_x + 1, 4)
    }
})
let in_game = false
let ball_dy = 0
let ball_dx = 0
let ball_y = 0
let ball_x = 0
let interval_step = 0
let interval = 0
let point = 0
let bar_x = 0
music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . #
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    while (in_game) {
        led.plot(ball_x, ball_y)
        led.plot(bar_x, 4)
        led.plot(bar_x + 1, 4)
        if (ball_x + ball_dx > 4) {
            ball_dx = ball_dx * -1
        } else if (ball_x + ball_dx < 0) {
            ball_dx = ball_dx * -1
        }
        if (ball_y + ball_dy < 0) {
            ball_dy = ball_dy * -1
        } else if (ball_y + ball_dy > 3) {
            if (led.point(ball_x + ball_dx, ball_y + ball_dy)) {
                music.playTone(740, music.beat(BeatFraction.Sixteenth))
                ball_dy = ball_dy * -1
                point = point + 1
                if (interval - interval_step >= 0) {
                    interval = interval - interval_step
                }
            } else {
                music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
                in_game = false
            }
        }
        if (in_game) {
            led.plot(ball_x + ball_dx, ball_y + ball_dy)
            led.unplot(ball_x, ball_y)
            ball_x = ball_x + ball_dx
            ball_y = ball_y + ball_dy
            basic.pause(interval)
        } else {
            game.setScore(point)
            game.gameOver()
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
        }
    }
})
