import { client } from "../../structures/Client/client";
//import { Event } from '../structures/interfaces/events';
import { Events, Client, ChatInputCommandInteraction, Interaction, Collection, Guild, ModalSubmitInteraction } from 'discord.js'
import config from '../../settings/config'

export default {
    name: Events.InteractionCreate,
    async execute(interaction: Interaction) {
        if (!interaction.isChatInputCommand()) return;

		const command = client.commands.get(interaction.commandName);
		if (!command) return;
		if (command.ownerOnly && !config.owners.includes(interaction.user.id)) {
			return interaction.reply({
				content: 'Only the bot owner can use this!',
				ephemeral: true,
			});
		}
        const guild = interaction.guild as Guild
        if (command.guildOnly && !config.guilds.includes(guild.id)) {
			return interaction.reply({
				content: 'This command is for private guilds only!!',
				ephemeral: true,
			});
		}

		if (!client.cooldowns.has(command.name)) {
			client.cooldowns.set(command.name, new Collection());
		}
		const now = Date.now();
        const timestamps = client.cooldowns.get(command.name) as Collection<string, number>; 
        const defaultCooldownDuration = 3;
        const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;

        if (timestamps?.has(interaction.user.id)) {
            const expirationTime = timestamps.get(interaction.user.id)! + cooldownAmount;
            if (now < expirationTime) {
                const expiredTimestamp = Math.round(expirationTime / 1000);
                return interaction.reply({ content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, ephemeral: true });
            }
        }
    
        timestamps?.set(interaction.user.id, now);
        setTimeout(() => timestamps?.delete(interaction.user.id), cooldownAmount);
    
        try {
			command.execute(interaction);
		} catch (e) {
			console.error(e);
			if (interaction.deferred || interaction.replied) {
				await interaction.followUp({
					content: 'An error had occurred',
					ephemeral: true,
				});
			} else {
				await interaction.reply({
					content: 'An error had occurred',
					ephemeral: true,
				});
			}
		}
    }
}