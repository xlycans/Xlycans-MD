const chalk = require('chalk')
const fs = require('fs')
global.ppbot = `https://i.ibb.co/3NY5xfz/XLYCANS.jpg`// pakai url gmbr
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})