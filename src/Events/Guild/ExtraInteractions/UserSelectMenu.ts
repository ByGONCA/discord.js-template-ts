import { client } from "../../../structures/Client/client";
import { Events, UserSelectMenuInteraction } from 'discord.js'

export default {
    name: Events.InteractionCreate,
    async execute(interaction: UserSelectMenuInteraction) {

        if (interaction.isUserSelectMenu()) {
            const userselectmenu = client.userselectmenu.get(interaction.customId);
            if (!userselectmenu) return;
            userselectmenu.execute(interaction);
        }
        
    }
}