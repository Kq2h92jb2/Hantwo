// S C R I P T  O R I  B Y  KIZH MD 🔭
// Credits, jangan dihapus atau diubah!

// - - THANKS TO ALL

//[!] Jangan Lupa Ganti Ownernya

const fs = require("fs")
const chalk = require("chalk")

// GLOBAL OWNER //

global.owner = ['6283146845711'] //GANTI JADI NO MU
global.namaowner = "Hana Khoi" // GANTI JADI NAMA MU
global.namebot = "Hantwo Bot" // GANT JADI NAMA BOT MU
global.sessionName = 'sessions' // JANGAN DI UBAH
global.prefa = ['','!','.',',','🐤','🗿'] // JANGAN DI UBAH KALAU GAK MAU EROR

// WATERMARK //

global.v = 'Hantwo Bot' // GANTI AJA
global.wm = 'Hantwo | Bot' // GANTI AJA
global.packname = "-"
global.author = "Hana" // GANTI AJA
global.author2 = "Khoi" // GANTI SAJA
global.footer = 'Hantwo Bot' // GANTI AJA

// FOTO MENU //

global.thumbailUrl = "" // GANTI AJA KALAU MAU GANTI LOGO MENU NYA
global.url = "https://chat.whatsapp.com/EOx8ISyOe1A6yrUbT9A4xx" // GANTI SAJA

// PAYMENT //
global.gopay = '083146845711'  // GANTI NO LU AJA

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

// GLOBAL MESS //

global.mess = {
    success: 'done boskuu',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Jadikan admin terlebih dahulu kak',
    owner: 'Hanya Owner kak',
    group: 'harus di dalam grub kak',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus bot',
    wait: 'sabar',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'khusus premium" mau prem? chat owner',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
//BATAS
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
