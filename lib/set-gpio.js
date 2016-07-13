const exec = require('child_process').exec

let writePin = (pin, state) => new Promise((resolve, reject) => exec(`gpio write ${pin} ${state}`, (error, stdout) => {
	if (error) {
		reject(error)
		return
	}
	resolve(stdout)
}))

const switchOn = pin => writePin(pin, 1)
const switchOff = pin => writePin(pin, 0)

module.exports = {
	switchOn,
	switchOff
}
