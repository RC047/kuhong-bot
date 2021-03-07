let handler = m => m.reply('Wa`alaikumussalam')

handler.customPrefix = /assalamualaikum|Assalamualaikum|Salam|salam/i
handler.command = new RegExp

module.exports = handler