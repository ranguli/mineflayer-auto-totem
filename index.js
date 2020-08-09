function init() {
  return inject;
}

function inject(bot) {
  const mcData = require('minecraft-data')(bot.version);
  const totemId = mcData.itemsByName.totem_of_undying.id;

  let enabled = false;

  bot.enableAutoTotem = () => {
    enabled = true;
  };

  bot.disableAutoTotem = () => {
    enabled = false;
  };

  bot.inventory.on('windowUpdate', () => {
    setTimeout(() => {
      if (enabled && bot.heldItem && bot.heldItem.type === totemId) {
        bot.unequip('hand', (err) => {
          console.error(err);
        });
      }
    }, 0); // We must wait until after windowUpdate for bot.heldItem to change
  });
}

module.exports = init;
