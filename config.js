const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_36_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYzLFxuICAgICAgICA2MixcbiAgICAgICAgNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICA5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg2LFxuICAgICAgICA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICA5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQVcycE85bU5BN3Q1SVJ6aFhkVzEvRmxKdGR2eWRHUm9RaFVFVWF4QmFtTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidHlydW14d19TWHFnYWk0dVJackhCUVwiLFxuICBcInBob25lSWRcIjogXCJjNmI0MTkwZC02ZDQ2LTQ5NGYtODI0Ny1mOTRhMzY5ZjhkN2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgNCxcbiAgICAgIDIzOSxcbiAgICAgIDQzLFxuICAgICAgMTkwLFxuICAgICAgMTk3LFxuICAgICAgMTIwLFxuICAgICAgMjA1LFxuICAgICAgMTU2LFxuICAgICAgNDEsXG4gICAgICAxMDQsXG4gICAgICAxMDUsXG4gICAgICAyOCxcbiAgICAgIDEwMixcbiAgICAgIDM0LFxuICAgICAgMTk4LFxuICAgICAgMTcxLFxuICAgICAgMTQ3LFxuICAgICAgNDcsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMTAyLFxuICAgICAgMjQwLFxuICAgICAgMjM4LFxuICAgICAgMTI1LFxuICAgICAgNzEsXG4gICAgICAyNSxcbiAgICAgIDIyMSxcbiAgICAgIDIyLFxuICAgICAgMTQ3LFxuICAgICAgMjUsXG4gICAgICAxMjMsXG4gICAgICAyMTgsXG4gICAgICAyMTQsXG4gICAgICAxOTgsXG4gICAgICAyMTcsXG4gICAgICAxMDMsXG4gICAgICAyNDYsXG4gICAgICA2MCxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZRNzJGQVlDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3ODYwNjEzOTU6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLQUJPSVwiLFxuICAgIFwibGlkXCI6IFwiMTk1MzM4MTMzMDEzNTI6ODRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUQ4ck5NRUVOMnF3N1VHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1STQzTWh4Uzczb2VFWUtLOERwNCtab1VpTjRyRzdIanJHaE83bXgzVFRVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkd4b3MwN2VNUG5mYXFMN0JyWG5jRklPbWpiZ1pWQXRXRnVMcVEwM1lHRXB6UERzNEVQTmdsMjBlVldjZE9DeU5xU1NHTUVPYmZJaFQzaWdNcEJoVEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVuVnFCZzNreUIxdW1sR1hHQWFKaTg4eEVzY2tJSXhHWURLb2t4c21YWTJUZlc2ZGlmVjRJU28wL1RWdGF3S3dsS0F6Q3NMSCtURDRSVVduUk1QOEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc4NjA2MTM5NTo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODY0OTkzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
