input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.West)
})
radio.setGroup(1)
basic.forever(function () {
	
})
