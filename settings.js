const fs = require('fs')

global.creator = 'Zeltoria' 
global.apikey = ['Elistz','buynew','Sange']
global.lolkey = "ajiart01"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
