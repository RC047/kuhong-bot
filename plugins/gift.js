let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode Giftmu!`, m)
    if (args[0] == 'KodeGift1' || args[0] == 'KodeGift2' || args[0] == 'KodeGift3' || args[0] == 'KodeGift4') {

        conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\n50000 XP!\n\nPajak -100 limit', m)
    global.DATABASE._data.users[m.sender].exp += 50000
    } else {
        conn.reply(m.chat, `*KODE GIFT TIDAK VALID!*\n\nSilahkan hubungi Owner untuk beli kode gift yang valid dengan cara ketik !buygift atau dapatkan kode gift secara gratis dengan cara anda berdaftar!`, m)
    }
}
handler.help = ['gift <kode>']
handler.tags = ['hadiah']
handler.command = /^(gift)$/i

handler.limit = 100

module.exports = handler
