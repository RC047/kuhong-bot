let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
  await m.reply('-9 limit')
let str = `
TOBAT BODO
`.trim()

    axios.get('http://api-melodicxt-2.herokuapp.com/api/random/hentai?apiKey=APIKEY')
    .then((res) => {
      imageToBase64(res.data.result.result)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
    global.DATABASE._data.users[m.sender].limit -= 9
        })
    })
}
handler.help = ['hentai -10']
handler.tags = ['dewasa']
handler.command = /^(hentai)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
