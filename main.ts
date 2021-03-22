let temp = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    temp = Math.round(input.temperature() * (9 / 5)) + 32
    basic.showNumber(temp)
})
