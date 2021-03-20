let handler = async function(m, { conn, text }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let username = conn.getName(who)
  let mentionedJid = [m.sender]
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let users = m.sender

    if (text > 5000) {
  conn.reply(m.chat, '*「 ANTI VIRTEX 」*\n\nTerdeteksi *${username}* telah mengirim link virtex!\n\nMaaf Kamu akan dikick dari grup ini!', m)
     await conn.groupRemove(m.chat, [users])
  }
}
handler.tags = ['group']
handler.command = new RegExp
handler.customPrefix = /^-?[a-z]+(\.[A-Z]+)?$/
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
