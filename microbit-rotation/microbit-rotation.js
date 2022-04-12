function plotPoints () {
    for (let index = 0; index <= points.length - 1; index++) {
        led.plotBrightness(points[index][0], points[index][1], 200 - Math.round(255 / points.length - 1) * index)
    }
    led.unplot(points[points.length - 1][0], points[points.length - 1][1])
}
input.onGesture(Gesture.LogoUp, function () {
    if (cy < 4) {
        cy += 1
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (cx > 0) {
        cx += -1
    }
})
function rotatePoint (centerx: number, centery: number, thisx: number, thisy: number, angle: number) {
    radians = Math.PI / 180 * angle
    cos = Math.cos(radians)
    sin = Math.sin(radians)
    newx = Math.round(cos * (thisx - centerx) + sin * (thisy - centery) + centerx)
    newy = Math.round(cos * (thisy - centery) - sin * (thisx - centerx) + centery)
    point = [newx, newy]
    return point
}
input.onGesture(Gesture.TiltRight, function () {
    if (cx < 4) {
        cx += 1
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (cy > 0) {
        cy += -1
    }
})
let point: number[] = []
let newy = 0
let newx = 0
let sin = 0
let cos = 0
let radians = 0
let cy = 0
let cx = 0
let points: number[][] = []
let d = 0
let t = 0
let xnew = 0
let ynew = 0
let s = 0
let c = 0
points = [[0, 1]]
let tailLength = 8
cx = 2
cy = 2
let cxx = cx
let cyy = cy
led.setBrightness(255)
basic.forever(function () {
    cxx = cx
    cyy = cy
    plotPoints()
    point = rotatePoint(cxx, cyy, points[0][0], points[0][1], -25)
    points.unshift(point)
    if (points.length == tailLength) {
        points.pop()
    }
    basic.pause(500)
})
