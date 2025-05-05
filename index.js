const Discord = require('discord.js');

const fs =require('fs');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix ="!";
client.commands=new Discord.Collection();

const commandFiles = fs.readdirSync('./commandes/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commandes/${file}`);
    client.commands.set(command.name, command);
}
const token = env.TOKEN_BOT

client.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});

client.on("message", async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args=message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase();
    if(command === "reactionrole"){
        client.commands.get('reactionrole').execute(message,args, Discord,client);
    }
  })

client.on("guildMemberAdd", member =>{
    member.roles.add("629767160188895239");
    member.roles.add("686972266420109330");
});


client.on("guildMemberRemove", member =>{
    console.log("Un membre a quitté le serveur");
    client.channels.cache.get("621683714669412353").send(member.displayName+ " a quitté le serveur !");
});

client.login(token);


