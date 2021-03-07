let handler = async m => m.reply(`
Terimakasih,, Bot akan masuk ke Grup Anda jika sudah dikonfirmasi oleh Owner :).
`.trim()) // Tambah sendiri kalo mau
handler.help = ['join <linkgc>']
handler.tags = ['premium']
handler.command = /^(join)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

module.exports = handler
