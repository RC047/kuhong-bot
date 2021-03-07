let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  let mentionedJid = [m.sender]
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  if (chat.antiLink && isGroupLink) conn.reply(m.chat, `*「 ANTI LINK 」*\n\nTerdeteksi ${name.vnmae || name.notify || namename || ('+' + name.jid.split`@`[0])} telah mengirim link group!`)

  return true
}
handler.group = true

module.exports = handler
