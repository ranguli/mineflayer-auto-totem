const mineflayer = require('mineflayer');
const autoTotem = require('..')(mineflayer);

const bot = mineflayer.createBot({
  host: 'localhost',
  port: 25565,
  username: 'autototem',
});

bot.loadPlugin(autoTotem);

bot.on('login', () => {
  bot.enableAutoTotem();
});
