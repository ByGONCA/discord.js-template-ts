import { client } from "../../../structures/Client/client";
import { Events, StringSelectMenuInteraction } from 'discord.js'

export default {
    name: Events.InteractionCreate,
    async execute(interaction: StringSelectMenuInteraction) {

        if (interaction.isStringSelectMenu()) {
            const stringselectmenu = client.stringselectmenu.get(interaction.customId);
            if (!stringselectmenu) return;
            stringselectmenu.execute(interaction);
        }
        
    }
}