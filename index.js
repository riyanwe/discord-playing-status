const { Client} = require('discord.js-selfbot-v11');
const client = new Client();
const keepAlive = require("./server")

client.on('ready', ()=> {
    console.log('bot ready');

    try{ client.user.setActivity('Minecraft', {
        type: "PLAYING"
    })} catch (e) { 
        console.error(e)};
});

keepAlive();
client.login(process.env.TOKEN);