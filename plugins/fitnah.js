let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  if (!text) return
  let cm = copy(m)
  let who
  if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag orang yang mau dfitnah!\nMisal: !fitnah gw gay @user Ngaku'
  cm.key.fromMe = false
  cm.message[m.mtype] = copy(m.msg)
  let sp = '@' + who.split`@`[0]
  let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd()/*, { contextInfo: {
    mentionedJid: [conn.parseMention(real.join(sp))]
  }}*/)
}
handler.command = /^(fitnah|fakereply)$/
handler.help = ['fitnah <teks> @user <teks>']
handler.tags = ['group']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

module.exports = handler

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
