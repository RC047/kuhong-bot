let handler = function (m) {
  if (!m.quoted) throw 'Reply pesan Bot yang ingin dihapus!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Salah! Hanya dapat menghapus pesan dari Bot!'
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh Bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['admin']
handler.admin = true
handler.group = true

handler.command = /^del(ete)?$/i

module.exports = handler
