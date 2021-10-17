let distance = 0
basic.forever(function () {
    distance = mbit_传感器类.Ultrasonic(DigitalPin.P0, DigitalPin.P1)
    basic.showString("distance")
    if (distance < 10) {
        mbit_电机类.Servo(AnalogPin.P2, 90)
    } else {
        mbit_电机类.Servo(AnalogPin.P2, 0)
    }
})
