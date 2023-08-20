import { client } from "../../../structures/Client/client";
import { Events, ModalSubmitInteraction } from 'discord.js'

export default {
    name: Events.InteractionCreate,
    async execute(interaction: ModalSubmitInteraction) {

        if (interaction.isModalSubmit()) {
            const modal = client.modal.get(interaction.customId);
            if (!modal) return;
            modal.execute(interaction);
        }
        
    }
}