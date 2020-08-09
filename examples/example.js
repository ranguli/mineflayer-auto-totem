const mineflayer = require('mineflayer');
const tpsPlugin = require('..')(mineflayer);

const bot = mineflayer.createBot({
  host: 'localhost',
  port: 25565,
  username: 'bot',
});

bot.loadPlugin(tpsPlugin);

bot.on('login', () => {
  bot.enableAutoTotem();
});
