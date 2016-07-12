const {switchOn, switchOff} = require('./set-gpio')

const Motor = ({positivePin, negativePin}) => {

	const rotateForward = () => Promise.all([
		switchOn(positivePin),
		switchOff(negativePin)
	])

	const rotateBackward = () => Promise.all([
		switchOn(negativePin),
		switchOff(positivePin)
	])

	const stop = () => Promise.all([
		switchOff(negativePin),
		switchOff(positivePin)
	])

	return {
		rotateForward,
		rotateBackward,
		stop
	}
}

module.exports = Motor
