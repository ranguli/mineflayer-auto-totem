const mineflayer = require('mineflayer');
const tpsPlugin = require('..')(mineflayer);

const bot = mineflayer.createBot({
  host: 'localhost',
  port: 25565,
  username: 'autototem',
});

bot.loadPlugin(tpsPlugin);

bot.on('login', () => {
  bot.enableAutoTotem();
});
