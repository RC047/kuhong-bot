let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('/data/data/com.termux/files/home/Kuhong-V4/lib/functions.js');
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix: _p }) => {
await conn.fakeReply(m.chat, 'Loading...', '0@s.whatsapp.net', '*BY RENDY GANS*')
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let tags = {
      'main': 'Start Bot',
      'daftar': 'Daftar',
      'xp': 'Exp & Limit',
      'hadiah': 'Hadiah',
      'sticker': 'Creator Menu',
      'dewasa': '18+ Menu',
      'game': 'Fun Menu',
      'image': 'Images Menu',
      'quotes': 'Random Menu',
      'primbon': 'Primbon Menu',
      'belajar': 'Education Menu',
      'music': 'Music Menu',
      'simi': 'Simsimi Menu',
      'kerang': 'Kerang Menu',
      'tools': 'Tools Menu',
      'internet': 'Search Menu',
      'downloader': 'Downloader Menu',
      'admin': 'Admin Menu',
      'group': 'Member Menu',
      'premium': 'Premium Menu',
      'owner': 'Owner Menu',
      'host': 'Host',
      'info': 'Information',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
╭─「 ${conn.getName(conn.user.jid)} 」
│
│• Nama : *%name*
│• Exp : *%exp XP*
│• Limit :  *%limit Limit*
│
│• Hari : *%week*
│• Tanggal : *%date*
│• Waktu : *%time*
│• Online : *%uptime*
│• Total User : *%totalreg nomor*
│• Prefix : *Multi Prefix*
│
│• YouTube : RC047
│• Instagram : @rendycraft047
│• FaceBook : RendyCraft
│• GitHub :
│https://github.com/RC047/Kuhong-V4
│• Nomor Bot :
│wa.me/62895337278647
╰────

╭─「 Jadwal Aktif 」
│• 08:00 - 22:00
╰────

╭─「 Rules Bot 」
│• Telpon/VC=BLOK/BAN
│• Spam=BLOK/BAN
╰────

╭─「 Join Group 」
│https://chat.whatsapp.com/EY0BzXwdV1PKAQQggsDzrU
╰────
%readmore`
    let header = conn.menu.header || '╭─「 %category 」'
    let body   = conn.menu.body   || '│• %cmd%islimit'
    let footer = conn.menu.footer || '╰────\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Bot Asli :\nhttps://wa.me/${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, limit, name, weton, week, date, time, totalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
            let buff = ('https://i.ibb.co/5jGVTx7/YOUR-PP.png');
            let voss = await fetch(buff)
			let vuss = await ftype.fromStream(voss.body)
			if (vuss !== undefined) {
    conn.sendFile(m.chat, await getBuffer(buff), 'KUHONG.jpg', text.trim(), m)
}  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu','help','start']
handler.tags = ['main']
handler.command = /^(menu|help|start)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 5

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
