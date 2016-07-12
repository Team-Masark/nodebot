const Robot = require('./lib/robot')

const nodebot = Robot({
	mlPositive: 1,
	mlNegative: 2,
	mrPositive: 3,
	mrNegative: 4
})

nodebot.moveForward()
	.then(console.log)
	.catch(console.log)
