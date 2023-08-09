const chalk = require('chalk')
const fs = require('fs')
global.linkgrub = `https://chat.whatsapp.com/F85rbh0T7CdHb6NPJIOcJA` //ini untuk Link grub button
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})