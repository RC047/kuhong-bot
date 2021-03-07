let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, 'Selamat Anda Mendapatkan\n500 XP!', m)
}
handler.help = ['mining']
handler.tags = ['exp']
handler.command = /^mining/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.exp = 500

module.exports = handler
