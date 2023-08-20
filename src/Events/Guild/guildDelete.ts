import { Events, EmbedBuilder, Guild, TextChannel, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'
import { client } from '../../structures/Client/client'
import { config } from 'dotenv'
config()
export default {
    name: Events.GuildDelete,
    
    async execute(guild: Guild) {

        const channel = client.channels?.cache.get(`${process.env.GUILD_CHANNEL_ID}`) as TextChannel

  const time = Math.round(guild.joinedTimestamp / 1000);
  const created = Math.round(guild.createdTimestamp / 1000);
  const guildname = guild ? guild.name : 'undefined';
  const icon = guild.iconURL() || client.user?.avatarURL()
    await channel.send({
    embeds: [
      new EmbedBuilder()
      .setColor(`Red`)
      .setTitle(`${client.user?.username} | Left Guild`)
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
          name: 'Left Guild Members',
          value: `\`\`\`${guild.memberCount}\`\`\``,
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
          name: `Left At`,
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
    ],
  });
    }
}