const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "DISCORD BOT TOKEN", 
prefix: "BOT PREFIX", 
intents: "all" // "all" will allow you using all intenets allowed in discord bot page
})


// #Events
bot.onMessage();
bot.readyCommand({
    channel: "CHANNEL ID",
    code: `CODE TO EXECUTE}}

// #Events Advanced eg. (optional)
// bot.onInteractionCreate(); 
// bot.onGuildJoin();
// bot.onGuildLeave();


`
})

// #Variables (non-path)
bot.variables({
dlength : "1cm",
experience : "none"
               })
               
// #Variables (path based)
// bot.variables(require("./commands/Variables.js"))
// Note: "commands" can be replaced by your directory name.

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})


// #Command Handler loader (optional)
// const loader = new aoijs.LoadCommands(bot);
// loader.load(bot.cmd,'./A01 DICTATOR PRIME/') 





// Kindly visit readme.md for guide links about aoi.js