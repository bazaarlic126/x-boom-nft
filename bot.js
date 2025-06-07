const TelegramBot = require('node-telegram-bot-api');
const token = '8142293325:AAHa07iWpCGhJa0_gAdP_tC2SBup8fX0IQk';
const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'https://x-boom-nft.onrender.com';

bot.onText(/\\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🚀 Добро пожаловать в X Boom NFT!", {
    reply_markup: {
      inline_keyboard: [[
        { text: "🎮 Играть", web_app: { url: webAppUrl } }
      ]]
    }
  });
});
