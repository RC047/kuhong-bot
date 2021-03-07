let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 BOT INFO 〙 ═
╠➥ Dibuat dengan bahasa JavaScript via NodeJS
╠➥ Author : RC047
║
╠➥ YouTube : RC047
╠➥ Instagram : @rendycraft047
╠➥ FaceBook : RendyCraft
║
╠═〘 Thanks To 〙 ═
╠➥ Nurutomo
╠➥ Drawl Nag
╠➥ Dan kawan2 yang lain :)
║
╠═〘 DONATION 〙 ═
╠➥ SAWERIA :
║https://saweria.co/donate/RC047
╠➥ DANA : +62895337278647
╠➥ TRI : +62895337278647
╠➥ GOPAY : +62895337278647
╠➥ OVO : +62895337278647
║
╠➥ Request? wa.me/+62895337278647
║
╠═〘 KUHONG BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

