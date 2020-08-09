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
      if (enabled) {
        const offHandItem = bot.inventory.slots[45];
        const totem = bot.inventory.findInventoryItem(totemId);

        if (totem && !offHandItem) {
          console.log(`Equipping bot ${bot.username} with totem`);
          bot.equip(totem, 'off-hand', (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
      }
    }, 0); // We must wait until after windowUpdate for bot.heldItem to change
  });
}

module.exports = init;
