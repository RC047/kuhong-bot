let handler = async function(m, { conn , args, isAdmin, isBotAdmin }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let username = conn.getName(who)
  let mentionedJid = [m.sender]
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let users = m.sender

    conn.reply(m.chat, `*「 ANTI LINK 」*\n\nTerdeteksi *${username}* telah mengirim link group!\n\nMaaf Kamu akan dikick dari grup ini!`, m)
 await conn.groupRemove(m.chat, [users])
}
handler.tags = ['group']
handler.customPrefix = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.command = new RegExp
handler.group = true

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
