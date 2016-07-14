const express = require('express')

const app = express()

const Robot = require('./lib/robot')

const nodebot = Robot({
	mlPositive: 22,
	mlNegative: 23,
	mrPositive: 24,
	mrNegative: 25
})

const takePicture = require('./lib/take-picture')

done = action => () => console.log('Robot : ', action)

app.use(express.static('public'))

app.post('/robot/left', (req, res) => {
	nodebot.moveLeft().then(done('left'))
	res.end('ok')
})

app.post('/robot/right', (req, res) => {
	nodebot.moveRight().then(done('right'))
	res.end('ok')
})

app.post('/robot/forward', (req, res) => {
	nodebot.moveForward().then(done('right'))
	res.end('ok')
})

app.post('/robot/backward', (req, res) => {
	nodebot.moveBackward().then(done('backward'))
	res.end('ok')
})

app.post('/robot/stop', (req, res) => {
	nodebot.stop().then(done('stop'))
	res.end('ok')
})

app.post('/robot/picture', (req, res) => {
	takePicture()
	res.end('ok')
})

app.listen(3000, () => console.log('Server started on port 3000'))
