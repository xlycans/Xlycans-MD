const chalk = require('chalk')
const fs = require('fs')
global.author = `Xlycans Multi Device\nJangan Lupa subscribe raif103 untuk Update sc terbaru dari kami :)` //ini untuk wm stiker ya kawan
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})