const mineflayer = require('mineflayer');
const autoArmor = require('..')(mineflayer);

const bot = mineflayer.createBot({
  host: 'localhost',
  port: 25565,
  username: 'autototem',
});

bot.loadPlugin(autoArmor);

bot.on('login', () => {
  bot.enableAutoTotem();
});
