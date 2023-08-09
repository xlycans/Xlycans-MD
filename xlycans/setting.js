const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'sLHJ4uPkBK' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['6281211265326'] 
global.ownernomer = "6281211265326"
global.socialmedia = "IG: kingverootz"
global.yutub = "YT: raif103"
global.lokasi = "Indonesia, Jawatengah, Banyumas"
global.sakuraurl = 'https://fierzaetha.my.id'
global.packgename = "by" 
global.author = "©XL115À" 
global.title = 'XlycansMD'
global.body = 'Subscribe Raif103'
global.welcome = false //false mati true nyala
global.left = false //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})