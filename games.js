// Catalog data. One entry per game; `url` is the main play link, `alt` holds other ports.
// `hot` marks the ports that got the most press/social buzz. `stars` = GitHub stars of `repo`.
export const GAMES = [
  // Lauta (@LautaTWT): PS2/PSP recompiled to WebAssembly + WebGPU
  { title: "Need for Speed: Most Wanted", year: 2005, platform: "PS2", genre: "Racing", by: "Lauta (@LautaTWT)", url: "https://nfsmwested.lauta.site/", alt: [["Most Wanted Online (MP)", "https://web.nfsmwo.com/"]], mp: true, lauta: true, hot: true },
  { title: "Def Jam: Fight for NY – The Takeover", year: 2006, platform: "PSP", genre: "Fighting", by: "Lauta (@LautaTWT)", url: "https://defjam.lauta.site/", mp: true, lauta: true, hot: true },
  { title: "Mortal Kombat 9", year: 2011, platform: "Vita", genre: "Fighting", by: "Lauta (@LautaTWT)", url: "https://mk9.lauta.site/", mp: true, lauta: true, hot: true },
  { title: "Mortal Kombat: Armageddon", year: 2006, platform: "PS2", genre: "Fighting", by: "Lauta (@LautaTWT)", url: "https://mka.lauta.site/", mp: true, lauta: true },
  { title: "Tekken 5: Dark Resurrection", year: 2006, platform: "PSP", genre: "Fighting", by: "Lauta (@LautaTWT)", url: "https://tekken.lauta.site/", alt: [["tekkendr.live (solo)", "https://tekkendr.live/"]], mp: true, lauta: true, hot: true },
  { title: "Geometría Conurbano", year: 2013, platform: "Remake", genre: "Platformer", by: "Lauta (@LautaTWT)", url: "https://gd.lauta.site/", lauta: true, note: "Geometry Dash remake with level editor" },

  // Need for Speed & racing
  { title: "Need for Speed: Underground 2", year: 2004, platform: "PC", genre: "Racing", by: "nfsu2.xyz", url: "https://nfsu2.xyz/", alt: [["Slayoner (PS2)", "https://nfsunderground2.site/"]], mp: true, hot: true, repo: "th0mk/nfsu2-web", stars: 693, note: "WebGPU, ~2.9 GB download" },
  { title: "The Need for Speed", year: 1994, platform: "DOS", genre: "Racing", by: "DOS.Zone", url: "https://dos.zone/the-need-for-speed-sep-1995/" },
  { title: "Midnight Club 3: DUB Edition", year: 2005, platform: "PSP", genre: "Racing", by: "Slayoner", url: "https://midnighhtclub3.online/", mp: true },
  { title: "Burnout 3: Takedown", year: 2004, platform: "PS2", genre: "Racing", by: "Slayoner", url: "https://burnout3.online/", mp: true },
  { title: "Gran Turismo 4", year: 2004, platform: "PS2", genre: "Racing", by: "Slayoner", url: "https://granturismo4.online/", mp: true },
  { title: "FlatOut 2", year: 2006, platform: "PC", genre: "Racing", by: "dezm0n", url: "https://dezm0n.itch.io/flatout-2-web-port", alt: [["justplayweb", "https://justplayweb.com/play/flatout-2/"]] },
  { title: "Mario Kart 64", year: 1996, platform: "N64", genre: "Racing", by: "AgentiLoop", url: "https://mk64js.gokart.games/play", mp: true },
  { title: "Crash Nitro Kart", year: 2003, platform: "PS2", genre: "Racing", by: "Slayoner", url: "https://crashnitrokart.online/", mp: true },
  { title: "Wipeout", year: 1995, platform: "PS1", genre: "Racing", by: "Dominic Szablewski", url: "https://phoboslab.org/wipegame/", repo: "phoboslab/wipeout-rewrite", stars: 3004 },

  // Open world & action
  { title: "GTA: Vice City", year: 2002, platform: "PC", genre: "Action", by: "DOS.Zone / reVC", url: "https://wasmarcade.com/vice-city", alt: [["quenq", "https://quenq.com/apps/vice-city/"], ["rabisco", "https://gta.rabisco.net/"]], hot: true },
  { title: "GTA III", year: 2001, platform: "PC", genre: "Action", by: "re3 web port", url: "https://wasmarcade.com/gta3", alt: [["quenq online", "https://quenq.com/apps/iii-online/"]] },
  { title: "The Simpsons: Hit & Run", year: 2003, platform: "PC", genre: "Action", by: "WASM Arcade", url: "https://wasmarcade.com/simpsons", alt: [["shar-wasm", "https://shar-wasm.cjoseph.workers.dev/?skipmovie="]] },
  { title: "Spider-Man 2", year: 2004, platform: "PS2", genre: "Action", by: "Slayoner", url: "https://spiderman2.online/" },
  { title: "Resident Evil 4", year: 2005, platform: "PS2", genre: "Action", by: "Slayoner", url: "https://residentevil4.online/" },
  { title: "Resident Evil Outbreak", year: 2003, platform: "PS2", genre: "Action", by: "Outbreak·Web", url: "https://outbreakweb.com/file1/", alt: [["File #2", "https://outbreakweb.com/file2/"]], mp: true },
  { title: "God of War: Ghost of Sparta", year: 2010, platform: "PSP", genre: "Action", by: "Slayoner", url: "https://godofwarsparta.online/" },
  { title: "Tomb Raider (OpenLara)", year: 1996, platform: "PS1", genre: "Action", by: "Timur Gagiev", url: "http://xproger.info/projects/OpenLara/", repo: "XProger/OpenLara", stars: 5146 },
  { title: "LEGO Island", year: 1997, platform: "PC", genre: "Action", by: "isle.pizza", url: "https://isle.pizza/" },

  // Shooters
  { title: "Halo: Combat Evolved", year: 2001, platform: "PC", genre: "Shooter", by: "exenu", url: "https://halo.exenu.co.uk/", mp: true, hot: true },
  { title: "Half-Life", year: 1998, platform: "PC", genre: "Shooter", by: "Xash3D web port", url: "https://pixelsuft.github.io/hl/", repo: "FWGS/xash3d-fwgs", stars: 2915 },
  { title: "Portal", year: 2007, platform: "PC", genre: "Shooter", by: "yikes.pw", url: "https://yikes.pw/portal/" },
  { title: "Team Fortress 2", year: 2007, platform: "PC", genre: "Shooter", by: "riddy", url: "https://tf2.riddy.workers.dev/", mp: true },
  { title: "Counter-Strike 1.6", year: 2003, platform: "PC", genre: "Shooter", by: "CSJS", url: "https://csjs.live/", mp: true },
  { title: "Call of Duty: Modern Warfare 2", year: 2009, platform: "PC", genre: "Shooter", by: "iw4browse", url: "https://iw4browse.iw4b.workers.dev/", mp: true },
  { title: "Quake III Arena", year: 1999, platform: "PC", genre: "Shooter", by: "pieter.com", url: "https://q3.pieter.com/", alt: [["DOS.Zone", "https://dos.zone/q3/"]], mp: true },
  { title: "Doom II (multiplayer)", year: 1994, platform: "DOS", genre: "Shooter", by: "pieter.com", url: "https://doom.pieter.com/", mp: true },
  { title: "Doom 3 (demo)", year: 2004, platform: "PC", genre: "Shooter", by: "Continuation Labs", url: "https://wasm.continuation-labs.com/d3demo/" },
  { title: "Unreal Tournament 2004", year: 2004, platform: "PC", genre: "Shooter", by: "Unreal Engine Web Ports", url: "https://unrealcollection.games/ut2004/", mp: true },
  { title: "Star Wars Jedi Knight II", year: 2002, platform: "PC", genre: "Shooter", by: "Virtastic", url: "https://jk2.virtastic.app/" },

  // Fighting & sports
  { title: "Tekken 4", year: 2001, platform: "PS2", genre: "Fighting", by: "Slayoner", url: "https://tekken4.online/", mp: true },
  { title: "Dragon Ball Z: Budokai Tenkaichi 3", year: 2007, platform: "PS2", genre: "Fighting", by: "dragonballbt3.online", url: "https://dragonballbt3.online/", mp: true },
  { title: "FIFA 14", year: 2013, platform: "PS2", genre: "Sports", by: "Slayoner", url: "https://fifa14.online/", mp: true },
  { title: "PES 6", year: 2006, platform: "PC", genre: "Sports", by: "OptiProjects", url: "https://pes6.optijuegos.net/", mp: true },
  { title: "SSX 3", year: 2003, platform: "PS2", genre: "Sports", by: "Slayoner", url: "https://ssx3.online/", mp: true },
  { title: "Tony Hawk's Pro Skater 3", year: 2001, platform: "PS2", genre: "Sports", by: "Slayoner", url: "https://tonyhawkpro3.online/", mp: true },
  { title: "Cricket 07", year: 2006, platform: "PC", genre: "Sports", by: "dhaiwat", url: "https://cricket07.dhaiwat.com/", mp: true, repo: "Dhaiwat10/cricket07-browser", stars: 189 },

  // RPG, strategy, indie
  { title: "The Elder Scrolls III: Morrowind", year: 2002, platform: "PC", genre: "RPG", by: "morrowind.app", url: "https://morrowind.app/", mp: true, hot: true },
  { title: "Diablo", year: 1996, platform: "PC", genre: "RPG", by: "d07RiV (diabloweb)", url: "https://d07riv.github.io/diabloweb/", alt: [["DevilutionX web", "https://johnimril.github.io/diablo_web/"]], repo: "d07RiV/diabloweb", stars: 2894 },
  { title: "Diablo II", year: 2000, platform: "PC", genre: "RPG", by: "DOS.Zone", url: "https://dos.zone/diablo-2/" },
  { title: "Command & Conquer: Red Alert 2", year: 2000, platform: "PC", genre: "Strategy", by: "Chrono Divide", url: "https://game.chronodivide.com/", mp: true, hot: true },
  { title: "Warcraft III: The Frozen Throne", year: 2003, platform: "PC", genre: "Strategy", by: "DOS.Zone", url: "https://dos.zone/warcraft-iii/", mp: true },
  { title: "Age of Empires II", year: 1999, platform: "PC", genre: "Strategy", by: "DOS.Zone", url: "https://dos.zone/age-of-empires2/" },
  { title: "Heroes of Might and Magic III", year: 1999, platform: "PC", genre: "Strategy", by: "DOS.Zone", url: "https://dos.zone/homm3/", mp: true },
  { title: "OpenTTD", year: 2004, platform: "PC", genre: "Strategy", by: "openttdonline", url: "https://openttdonline.com/play/", alt: [["DOS.Zone", "https://dos.zone/open-ttd/"]], mp: true },
  { title: "Minecraft 1.8.8 (Eaglercraft)", year: 2015, platform: "PC", genre: "Platformer", by: "WASM Arcade", url: "https://wasmarcade.com/minecraft" },
  { title: "Terraria", year: 2011, platform: "PC", genre: "Platformer", by: "omonkeyzz & TAN0RR", url: "https://playterraria.lol/game/", mp: true },
  { title: "Stardew Valley", year: 2016, platform: "PC", genre: "RPG", by: "cirsius", url: "https://wasm.rip/files/stardewvalley/index.html" },
  { title: "Hollow Knight", year: 2017, platform: "PC", genre: "Platformer", by: "dezm0n", url: "https://dezm0n.itch.io/hollow-knight-web-port" },
  { title: "Sonic Mania", year: 2017, platform: "PC", genre: "Platformer", by: "Crunch Arcade", url: "https://ugbontop.github.io/Sonic-Mania-InYourBrowser/" },
  { title: "Super Mario Galaxy", year: 2007, platform: "Wii", genre: "Platformer", by: "T4ctica1", url: "https://hedgeplays2.github.io/SMGwebport/" },
  { title: "Among Us", year: 2018, platform: "PC", genre: "Puzzle", by: "wasm.rip", url: "https://wasm.rip/files/amongus/index.html" },
];
