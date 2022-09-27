Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    mbit_Robot.RGB_Car_Big(0, 0, 0)
    Mbit_IR.init(Pins.P0)
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 0, 0)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 0)
    music.ringTone(262)
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
})
basic.showString("Hello!")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
