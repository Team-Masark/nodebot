const Robot = require('./lib/robot')

const nodebot = Robot({
	mlPositive: 22,
	mlNegative: 23,
	mrPositive: 24,
	mrNegative: 25
})

const twoSecondTimeout = () => new Promise(resolve => setTimeout(resolve, 2000))

nodebot.moveForward()
	.then(() => {
		console.log('The bot should be MOVING FORWARD')
		return twoSecondTimeout()
	})
	.then(() => nodebot.moveBackward())
	.then(() => {
		console.log('The bot should be MOVING BACKWARD')
		return twoSecondTimeout()
	})
	.then(() => nodebot.moveLeft())
	.then(() => {
		console.log('The bot should be MOVING LEFT')
		return twoSecondTimeout()
	})
	.then(() => nodebot.moveRight())
	.then(() => {
		console.log('The bot should be MOVING RIGHT')
		return twoSecondTimeout()
	})
	.then(() => nodebot.stop())
	.then(() => {
		console.log('The bot should STOP')
	})
	.catch(console.error)
