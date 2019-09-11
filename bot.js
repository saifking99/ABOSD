const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"
var adminprefix = '$'


//bc

client.on('message', async(message) => {
  if(message.author.julian || message.channel.type == 'dm') return;
  let args = message.content.split(' ');
  if(args[0] == `${prefix}bc`){
      if(!message.member.hasPermission('MANAGE_GUILD')) return;
      if(!args[1]) return message.channel.send(`**Usage:** ${prefix}bc [message]`);
      message.guild.members.map((m) => {
          setTimeout(() => {
              m.send(args.slice(1).join(' ').replace('[user]', m).replace('[server]', message.guild.name)).catch(e => undefined);
          }, 550);
      });
  }
}); // مو مجرب ,_,





client.login(process.env.TOKEN);
