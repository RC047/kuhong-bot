let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (isAdmin && chat.antiLink && link) return m.reply(`*${name}* Adalah Admin! :D\n\nBot tidak akan mengkick!`)
  if (!isBotAdmin && chat.antiLink && link) return m.reply(`Untung Bot Bukan Admin!\n\nKalo nggak Bot pasti udah ngekick kamu *${name}*`)
  if (!isAdmin && isBotAdmin && chat.antiLink && link) {
 m.reply(`*「 ANTI LINK 」*\n\nTerdeteksi *${name}* telah mengirim link group!\n\nMaaf Kamu akan dikick dari grup ini!`)
   this.groupRemove(m.chat, [m.sender])
  }
}
handler.group = true

module.exports = handler
