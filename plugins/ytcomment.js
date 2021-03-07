let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [t1, t2] = text.split `|`
    let str = `
Nih Cuyy
`.trim()

    if (!t1) return conn.reply(m.chat, 'Silahkan masukan parameter teks1', m)
    if (!t2) return conn.reply(m.chat, 'Silahkan masukan parameter teks2', m)

    await m.reply('Sedang membuat...')
    axios.get('https://naufalhoster.xyz/textmaker/ytcomment?apikey=Cv5SHS-9ZxAto-HnWqLR&nama=' + t1 + '&comment=' + t2)
    .then((res) => {
      imageToBase64(res.data.result.image)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
        })
    })
}
handler.help = ['ytcomment <nama|teks>']
handler.tags = ['sticker']
handler.command = /^(ytcomment)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler