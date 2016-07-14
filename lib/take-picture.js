const {execSync} = require('child_process')

const pathToScript = './tweet.sh'

module.exports = () => execSync(`sh ${path.resolve(pathToScript)}`)
