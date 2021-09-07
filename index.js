const TelegramApi = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new TelegramApi(TOKEN, { polling: true });

bot.on('message', (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === '/start') {
    return bot.sendMessage(
      chatId,
      `${msg.from.first_name} sveiki atvykę į svečius pas Visagino gidą-botą!`
    );
  } else if (text === 'Kas tu?') {
    return bot.sendMessage(chatId, `${msg.from.first_name} tu žinai geriau...`);
  }
});
