import { client } from "../../../structures/Client/client";
import { Events, ButtonInteraction } from 'discord.js'

export default {
    name: Events.InteractionCreate,
    async execute(interaction: ButtonInteraction) {
        if (interaction.isButton()) {
            const button = client.button.get(interaction.customId);
            if (!button) return;
            button.execute(interaction);
        }
    }
}