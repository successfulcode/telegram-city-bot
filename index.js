const TelegramApi = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new TelegramApi(TOKEN, { polling: true });

bot.on('message', (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  switch (text) {
    case '/start':
      return `${msg.from.first_name} sveiki atvykę į svečius pas Visagino gidą-botą!`;
    case 'Kas tu?':
      return bot.sendMessage(
        chatId,
        `${msg.from.first_name} tu žinai geriau...`
      );
    case 'Kas tu?':
      return bot.sendMessage(
        chatId,
        `${msg.from.first_name} tu žinai geriau...`
      );
    case 'Kiek tau metu?':
      return bot.sendMessage(chatId, `Tiek pat kiek ir mano miestui...`);
    case 'Papasakok apie Visaginą':
      return bot.sendMessage(
        chatId,
        `Visaginas – Lietuvos miestas šiaurės rytuose, Utenos apskrityje, 40 km į šiaurės rytus nuo Ignalinos. Visagino savivaldybės centras. Labiausiai žinomas dėl netoli Visagino esančios Ignalinos AE (6 km nuo miesto; atidaryta 1983 m. pabaigoje, uždaryta 2009 m. pabaigoje). Planuota šalia buvusios atominės elektrinės pastatyti naująją Visagino atominę elektrinę. Visagine yra du pašto skyriai (centrinis LT-31001), kultūros centras, ligoninė, pensionatas. Pietuose telkšo Visagino ežeras, pietvakariuose – Kukuižės ežeriukas. Yra Visagino Šv. apaštalo Pauliaus bažnyčia (pastatyta 1998 m.), Visagino koplyčia (įrengta 1989 m.), dvi stačiatikių cerkvės (Visagino Jono Krikštytojo Gimimo cerkvė ir Visagino Šv. kankinio Panteleimono cerkvė) bei įsikūręs Visagino stačiatikių dekanatas, Visagino sentikių cerkvė (įrengta 2013 m.).`
      );
    default:
      return bot.sendMessage(
        chatId,
        `${msg.from.first_name} Aš nesupratau tavo klausimo...`
      );
  }
});
