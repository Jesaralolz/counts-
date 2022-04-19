input.onButtonPressed(Button.A, function () {
    for (let X = 0; X <= 9; X++) {
        basic.showNumber(X)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let X = 0; X <= 9; X++) {
        basic.showNumber(X)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let X = 0; X <= 5; X++) {
        basic.showNumber(X * 2)
    }
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
