const Motor = require('./motor')

const Robot = ({mlPositive, mlNegative, mrPositive, mrNegative}) => {
	const motorLeft = Motor({
		positivePin: mlPositive,
		negativePin: mlNegative
	})

	const motorRight = Motor({
		positivePin: mrPositive,
		negativePin: mrNegative
	})

	const moveForward = () => Promise.all([
		motorLeft.rotateForward(),
		motorRight.rotateForward()
	])

	const moveBackward = () => Promise.all([
		motorLeft.rotateBackward(),
		motorRight.rotateBackward()
	])

	const moveLeft = () => Promise.all([
		motorLeft.stop(),
		motorRight.rotateForward()
	])

	const moveRight = () => Promise.all([
		motorLeft.rotateForward(),
		motorRight.stop()
	])

	const stop = () => Promise.all([
		motorLeft.stop(),
		motorRight.stop()
	])

	return {
		moveForward,
		moveBackward,
		moveLeft,
		moveRight,
		stop
	}

}

module.exports = Robot
