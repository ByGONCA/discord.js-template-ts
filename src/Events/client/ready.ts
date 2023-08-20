//import { Event } from '../structures/interfaces/events';
import { Events, Client, REST, Routes, ActivityType, EmbedBuilder, TextChannel } from 'discord.js'
import { client } from '../../structures/Client/client'
import fs from 'node:fs'
import chalk from 'chalk'

export default {
    name: Events.ClientReady,

    async execute() {
        console.log(chalk.bgCyanBright(`[ Client ]`) + chalk.cyanBright(` Logged in`) + chalk.hex('#DEADED')(` ${client.user?.username} (${client.user?.id})`) + chalk.cyanBright(` with sucess!`));
        
        ////////////////////////////////////// STATUS /////////////////////////////////////////////
        const textList = [
            'Discord.js v14 Template Typescript',
            `By !g0nc4 ℣`
            ]
            client.user?.setPresence({ status: "online" });
            setInterval(() => {
               const text = textList[Math.floor(Math.random() * textList.length)];
            client.user?.setActivity(text, { type: ActivityType.Playing });
            }, 5000);
        
            //////////////////////////  EMBED LOGIN ////////////////////////////
        if (client.readyTimestamp !== null) {

        const channel = client.channels.cache.get(`${process.env.ONLINE_CHANNEL_ID}`) as TextChannel
        const time = Math.round(client.readyTimestamp / 1000)

        const embedlogin = new EmbedBuilder()
        .setColor(`Green`)
        .setTitle(`${client.user?.username} | Online`)
        .setAuthor({
        name: `${client.user?.username}`,
        iconURL: `${client.user?.avatarURL()}`,
        })
        .addFields(
        {
        name: 'Presence Status',
        value: `\`\`\`${client.user?.presence.status}\`\`\``,
        inline: true,
        },
        {
        name: 'Guilds',
        value: `\`\`\`${client.guilds.cache.size}\`\`\``,
        inline: true,
        },
        {
        name: 'Members',
        value: `\`\`\`${client.users.cache.size}\`\`\``,
        inline: true,
        },
        {
        name: 'Channels',
        value: `\`\`\`${client.channels.cache.size}\`\`\``,
        inline: true,
        },
        {
        name: `Hours:`,
        value: `<t:${time}:F> (<t:${time}:R>)`,
        inline: true
        },
        )
        .setThumbnail(`${client.user?.avatarURL()}`)
        .setTimestamp()
        .setFooter({
        text: `${client.user?.username} ©️ All rights reserved`,
        iconURL: `${client.user?.avatarURL()}`,
        });
        channel.send({ embeds: [embedlogin]})
    }
            ////////////////////////////// SLASH COMMANDS LOADER ///////////////////////////////

        const TOKEN = (process.env.TOKEN) as string;
        const commandsArr = [];
		const commandFolders = fs.readdirSync('./src/Interactions/SlashCommands');
		for (const folder of commandFolders) {

			const commandFiles = fs
				.readdirSync(`src/Interactions/SlashCommands/${folder}`)
				.filter((file) => file.endsWith('.ts'));
			for (const file of commandFiles) {
				const { command } = await import(`../../Interactions/SlashCommands/${folder}/${file}`);
				command.module = folder;
				try {
					client.commands.set(command.data.name, command);
				} catch (e) {
					console.log(console.error(e));
				}
				commandsArr.push(command.data.toJSON());
			}
		}
		const rest = new REST({ version: '10' }).setToken(TOKEN);

		try {
			await rest.put(Routes.applicationCommands(client.user?.id as string), {
				body: commandsArr,
			});
			console.log(chalk.bgHex('#FF00C5')(`[ Slash Commands ]`) + chalk.hex('#FF00C5')(` Loaded (#${commandsArr.length}) commands!`));
		} catch (e) {
			console.error(e);
		}
    }
}