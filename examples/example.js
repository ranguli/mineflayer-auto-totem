const mineflayer = require('mineflayer')
const tpsPlugin = require('../')(mineflayer)
const inventoryViewer = require('mineflayer-web-inventory')

const bot = mineflayer.createBot({
  host: 'localhost',
  port: 25565,
  username: 'bot'
})

inventoryViewer(bot)
bot.loadPlugin(tpsPlugin) // Load the plugin

bot.on('login', () => {
    bot.enableAutoTotem()
})

