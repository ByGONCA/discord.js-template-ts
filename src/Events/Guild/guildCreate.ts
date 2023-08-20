import { Events, EmbedBuilder, Guild, TextChannel, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
import { client } from '../../structures/Client/client'
import { config } from 'dotenv'
config()
export default {
    name: Events.GuildCreate,
    
    async execute(guild: Guild) {
        const channel = client.channels?.cache.get(`${process.env.GUILD_CHANNEL_ID}`) as TextChannel
        const time = Math.round(guild.joinedTimestamp / 1000);
        const created = Math.round(guild.createdTimestamp / 1000);
        const guildname = guild ? guild.name : 'undefined';
        const icon = guild.iconURL() || client.user?.avatarURL()
                
        const embed = new EmbedBuilder()
                    .setColor(`Green`)
                    .setTitle(`${client.user?.username} | New Guild`)
                    .setAuthor({
                    name: `${client.user?.username}`,
                    iconURL: `${icon}`,
                    })
                    .addFields(
                      {
                        name: 'Guild Name',
                        value: `\`\`\`${guildname}\`\`\``,
                        inline: true,
                      },
                      {
                        name: 'New Guild Members',
                        value: `\`\`\`${guild.memberCount}\`\`\``,
                        inline: true,
                      },
                      {
                        name: 'Channels',
                        value: `\`\`\`${guild.channels.cache.size}\`\`\``,
                        inline: true,
                      },
                      {
                        name: `Owner`,
                        value: `<@${guild.ownerId}> (${guild.ownerId})`,
                        inline: true
                      },
                      {
                        name: 'Created at',
                        value: `<t:${created}:F> (<t:${created}:R>)`,
                        inline: true,
                      },        
                      {
                        name: `Joined At`,
                        value: `<t:${time}:F> (<t:${time}:R>)`,
                        inline: true
                      },
                      {
                        name: 'Guilds',
                        value: `\`\`\`${client.guilds.cache.size}\`\`\``,
                        inline: true,
                      },
              
                    )
                    .setThumbnail(`${icon}`)
                    .setTimestamp()
                    .setFooter({
                      text: `${client.user?.username} ©️ All rights reserved`,
                      iconURL: `${icon}`,
                    })
          await channel.send({
          embeds: [
            embed
          ]
        });
    }
}