module.exports = init

function init () {
  return inject
}


function inject (bot) {
  const mcData = require('minecraft-data')(bot.version)

  var enabled = false

  bot.enableAutoTotem = function () {
      enabled = true
  }

  bot.disableAutoTotem= function () {
      enabled = false
  }

  bot.inventory.on('windowUpdate', () => {
      setTimeout(() => {
        if (enabled && bot.heldItem && bot.heldItem.type == totemId) {
          bot.unequip('hand', (err) => {
            console.error(err)
          })
        }
      }, 0) // We must wait until after windowUpdate for bot.heldItem to change
  })


}
