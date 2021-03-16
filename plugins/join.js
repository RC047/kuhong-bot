const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan link groupmu', m)
    if (text > 500) return conn.reply(m.chat, 'Link Kepanjangan!', m)
    var nomor = m.sender
    const teks1 = `*[ MINTA JOIN ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nLink GC : ${text}`
    conn.sendMessage('62895337278647@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, 'Terimakasih!\n\nBot akan masuk ke Grup anda setelah dikonfirmasi oleh Owner Bot', m)
}
handler.help = ['join <link gc>']
handler.tags = ['premium']
handler.command = /^(join)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
