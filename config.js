//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9JQ2V4TE5JK0t3TmtXQzFoK0NZbzdYYUU4Q1N2TkVJOEZ1WEJHRlJIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtkbG4xTGx5b1NUQndUVXRDWE1vRmhOVG85b0p6SzdCZ1RkNUxvTGZFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTnhjRFB4SHExUXE3ZmVyaWZWWUhqSWdSQVBFb3lNOGl1Mm54b0s4STJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRFpwc21RWnlYTmxBQnN6NVNwMk0yOGJmVUk1T0xRcHpNQnpoMWtnWGtRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGY21ma2NpRC9QanhQVjZDWkZhM2dxeDd6RFkydFpyOExDcFFBbFpuRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYzOEZMZGxrNEtJb3UwVS94QkF0Smd3UG1iOWR6UTlSc3kwL1BpK3NlQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVrWUJlbFdrYTE1ZUlza3V6c1hSN2RUK1hPSC8vZ0R3OHh0bW1SdXZrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXRWd1liaTFzdW92REdNSzAwbVNwWHREeWJuU0lTV1dGdFBUZFplcWVpaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9iY3FhenFwT0ozbjlBdTdyZXpEWGl5dy9YUFl6YnUveXpXY3l1SmhaS3NtZUpDa040T0ZLZS9LT0Joa2VkOUd0ZW1kc2t1eTFFd2kzUytoWkNuSmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6ImpQRVpKNWIwVXk0S1JiOExPUWhMTExCcEphVXUveGE0UklFYjdBK0hBbUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlN5cVl3TlcxUUZHLWNrV0dLTnBldGciLCJwaG9uZUlkIjoiZTU3NzJiOGEtMmE2Mi00YjA0LTk3NmUtMWExNjc2NzM4ZDY4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN5N0N0ZkhWVC9ueFV5Wktib2hWQlRxRlhycz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSW9MRWlCYmNKa1YvNnJrT2t0T3ZSMzlIOWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOEFUTEVITTUiLCJtZSI6eyJpZCI6Ijk0Nzg5MzQ1NTMxOjQzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNNX05pbWVzaGthIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbjh1dUFGRU92SXZiY0dHQlVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJMkhsYVVXUlZaTU81c2tGRVVQT1NIYmhBbSsweTR6clowZ3RFU0VBZ3pJPSIsImFjY291bnRTaWduYXR1cmUiOiJKL1ZNQm1BdUdPSG1JTHVEWUs5NHNMUzNXVWxzbGx3Z2FjbU0zblBIbVFwcmcyb1JLdUZMbG9PanJpblFnWHJhcWRxUVl3cHZQRk8vaGMrdTcvZHRBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidTlCUmx5b0RPYUI5MGJlWmgwajRaWlFYY3N1QXEvbzZsVmNOVVRmeU9tVlJBOC95aEJ2WFpoOWJ2M2huemJQZGY3OENoQzhZd3doa0UxSEhFeHd2Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4OTM0NTUzMTo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTTmg1V2xGa1ZXVER1YkpCUkZEemtoMjRRSnZ0TXVNNjJkSUxSRWhBSU15In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2OTY0ODU3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVHeCJ9";
global.MONGODB = process.env.MONGODB_URI || "mongodb+srv://Nimeshka:Anura12345678@cluster0.6bj5j.mongodb.net/";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "94789345531")
  : "94789345531";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "RCD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
