let handler = async function(m, { conn, text }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let username = conn.getName(who)
  let mentionedJid = [m.sender]
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let users = m.sender

    if (m.text > 5000) {
  conn.reply(m.chat, '*「 ANTI VIRTEX 」*\n\nTerdeteksi *${username}* telah mengirim link virtex!\n\nMaaf Kamu akan dikick dari grup ini!', m)
     await conn.groupRemove(m.chat, [users])
  }
}
handler.group = true

module.exports = handler
