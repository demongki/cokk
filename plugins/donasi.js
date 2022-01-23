let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [0881036690566]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Instagram: https://instagram.com/demo_ngki
│ • Dana  : 0881036690566
│ • Ovo : 0881036690566
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
