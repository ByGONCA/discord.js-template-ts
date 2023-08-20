import { EmbedBuilder, SlashCommandBuilder, ChatInputCommandInteraction, Client } from 'discord.js';
import { Command } from '../../../structures/interfaces/slashcommands';

export const command: Command = {
	name: 'ping',
	ownerOnly: false,
	cooldown: 5,
	usage: '/ping',
    guildOnly: false,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong with milliseconds'),
	execute: async (interaction: ChatInputCommandInteraction) => {

		const ping = new EmbedBuilder()
			.setTitle('Ping')
			.setDescription('Pong!')
			.setColor(0xdff8eb)
		await interaction.reply({ embeds: [ping] });
	},
};