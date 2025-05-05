
module.exports ={
    name: 'reactionrole',
    description: 'Configurer les reactions pour les roles',
    async execute(message,args,Discord,client){
        const channel=env.CHANNEL_ID;
        const InfoTeam = message.guild.roles.cache.find(role => role.name === "Informatique");
        const RLTeam = message.guild.roles.cache.find(role => role.name === "Rocket League");
        const MinecraftTeam = message.guild.roles.cache.find(role => role.name === "Minecraft");
        const ApexTeam = message.guild.roles.cache.find(role => role.name === "Apex");
        const FortniteTeam = message.guild.roles.cache.find(role => role.name === "Fortnite");
        const ValorantTeam = message.guild.roles.cache.find(role => role.name === "Valorant");
        const LolTeam = message.guild.roles.cache.find(role => role.name === "League of Legends");
        const BusinessTeam = message.guild.roles.cache.find(role => role.name === "Business Tour");
        const MinijeuxTeam = message.guild.roles.cache.find(role => role.name === "Mini-Jeux");

        const minecraftEmoji= client.emojis.cache.find(emoji => emoji.name === "minecraft");
        const apexEmoji = client.emojis.cache.find(emoji => emoji.name === "apex");
        const rlEmoji = client.emojis.cache.find(emoji => emoji.name === "rocket");
        const fortniteEmoji = client.emojis.cache.find(emoji => emoji.name === "fortnite");
        const valorantEmoji= client.emojis.cache.find(emoji => emoji.name === "valorant");
        const lolEmoji= client.emojis.cache.find(emoji => emoji.name === "league");
        const businessEmoji = client.emojis.cache.find(emoji => emoji.name === "money");
        const infoEmoji= client.emojis.cache.find(emoji => emoji.name === "informatique");
        const minijeuxEmoji= client.emojis.cache.find(emoji => emoji.name === "minijeux");

        let embed1 = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choississez les jeux que vous voulez voir apparaître !')
            .setDescription('Réagissez aux jeux que vous souhaitez voir !\n\n'
                + `${rlEmoji} : Rocket League\n`
                + `${apexEmoji} : Apex\n`
                + `${minecraftEmoji} : Minecraft\n`
                + `${fortniteEmoji} : Fortnite\n`
                + `${valorantEmoji} : Valorant\n`
                + `${lolEmoji} : League of Legends\n`
                + `${businessEmoji} : Business Tour\n`
                + `${infoEmoji} : Informatique\n`
                + `${minijeuxEmoji} : Mini-Jeux`);

        let messageEmbed = await message.channel.send({embeds: [embed1]});
        messageEmbed.react(rlEmoji);
        messageEmbed.react(apexEmoji);
        messageEmbed.react(minecraftEmoji);
        messageEmbed.react(fortniteEmoji);
        messageEmbed.react(valorantEmoji);
        messageEmbed.react(lolEmoji);
        messageEmbed.react(businessEmoji);
        messageEmbed.react(infoEmoji);
        messageEmbed.react(minijeuxEmoji);


        
        console.log(rlEmoji);
        client.on('messageReactionAdd', async (reaction, user) => {
            console.log(reaction.emoji.name);
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel.id==channel){
                
                if(reaction.emoji.name==rlEmoji.name){
                    
                    await reaction.message.guild.members.cache.get(user.id).roles.add(RLTeam);
                }
                if(reaction.emoji.name==apexEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ApexTeam);
                }
                if(reaction.emoji.name==minecraftEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MinecraftTeam);
                }
                if(reaction.emoji.name==fortniteEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(FortniteTeam);
                }
                if(reaction.emoji.name==valorantEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ValorantTeam);
                }
                if(reaction.emoji.name==lolEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(LolTeam);
                }
                if(reaction.emoji.name==businessEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(BusinessTeam);
                }
                if(reaction.emoji.name==infoEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(InfoTeam);
                }
                if(reaction.emoji.name==minijeuxEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MinijeuxTeam);
                }
            }else{
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel.id==channel){
                if(reaction.emoji.name==rlEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(RLTeam);
                }
                if(reaction.emoji.name==apexEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ApexTeam);
                }
                if(reaction.emoji.name==minecraftEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MinecraftTeam);
                }
                if(reaction.emoji.name==fortniteEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(FortniteTeam);
                }
                if(reaction.emoji.name==valorantEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ValorantTeam);
                }
                if(reaction.emoji.name==lolEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(LolTeam);
                }
                if(reaction.emoji.name==businessEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(BusinessTeam);
                }
                if(reaction.emoji.name==infoEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(InfoTeam);
                }
                if(reaction.emoji.name==minijeuxEmoji.name){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MinijeuxTeam);
                }
            }else{
                return;
            }
        });
    }

}