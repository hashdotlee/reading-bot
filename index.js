require('dotenv').config()
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  console.log("message created");
  console.log(message);
  if (message.content === "ping") {
    await message.reply("Pong!");
  }
});


client.login(process.env.TOKEN);
