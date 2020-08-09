# mineflayer-auto-totem

Automatically move totems from your bots inventory into its offhand as they
break. This is the same thing as the "Auto Totem" feature in many hacked
minecraft clients, but now for your mineflayer bot!

# Usage

```javascript

const mineflayer = require('mineflayer');
const autoArmor = require('..')(mineflayer);

const bot = mineflayer.createBot({...}); // Create your bot here

bot.loadPlugin(autoArmor); // Load the plugin

bot.on('login', () => {
  bot.enableAutoTotem(); // Enable auto totem
});

```
