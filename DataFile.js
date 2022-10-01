// 👈 You Can change this your choice 
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🗡️'] // 👈 Enter your Emoji 
global.emoji02 = ['🗡️'] //👈 Enter your Emoji
global.notice = ` *Hello there*
*i'm Mortred*
*I am one of Sisters of the Veil*
*From Dota World*
*Come to this app for do your shit ! SMH*
*Anyway read my story here : *
*My Story  - https://liquipedia.net/dota2/Phantom_Assassin*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+16028253490'] //👈  Enter Your number
global.premium =  ['+16028253490'] //👈  Enter Your number
global.ownernomer = '+16028253490' //👈  Enter Your number
global.ownername = 'MORTRED' //👈 Enter Your name
global.botname = 'Sister Of Veil`s Bot' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 by Valve' //👈 Enter Your Name
global.ig = 'https://github.com/xyntix/GARFIELD-WHATSAPP-BOT-v8/' // 👈 You Can change this your choice
global.region = 'DOTA 2 ' // 👈 You Can change this your choice
global.sc = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Follow My Story Here xD - > ' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://liquipedia.net/dota2/Phantom_Assassin'// 👈 Enter your Social media link to follow now button
global.welcome = '*Welcome To The Group 🦋*' // 👈 You Can change this your choice
global.bye = '*Bye bye Mother fucker 🐼*' // 👈 You Can change this your choice
global.packname = 'Sister Of Veil`s Bot'  // 👈 You Can change this your choice 
global.author = 'MORTRED' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🗡️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://www.kibrispdr.org/data/1119/phantom-assassin-dota-2-wallpaper-3.jpg' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For My Beloved King !', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
