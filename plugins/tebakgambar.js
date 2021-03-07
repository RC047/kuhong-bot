let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
  await m.reply('Searching...')

    axios.get('https://videfikri.com/api/tebakgambar')
    .then((res) => {
      imageToBase64(res.data.result.soal_gbr)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `Jawaban :\n${res.data.result.jawaban}`

     conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
        })
    })
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^(tebakgambar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler