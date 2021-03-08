let handler = async m => m.reply(`
╭─「 DONATION 」
│• SAWERIA :
│https://saweria.co/donate/RC047
│• OVO [+62895337278647]
│• TRI [+62895337278647]
│• DANA [+62895337278647]
│• GOPAY [+62895337278647]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
