const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const jcore = require('./jcore');
const sia = require('./sia');
const villagersearch = require('./villagersearch')



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
  
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  } else if (command === 'jcore') {
    console.log(args);
    string = args.join(" ");
    string = jcore.jcore(string);
    return message.channel.send(string);
  }
  else if (command === 'sia') {
    console.log(args);
    string = args.join(" ");
    string = sia.sia(string);
    return message.channel.send(string);
  }
  else if (command === 'vsearch') {
    console.log(args);
    string = args.join(" ");
    if(args.length > 1){
      console.log("wtf");
    }
    string = villagersearch.search(string);
    return message.channel.send(string);
  }
});

client.login(token);