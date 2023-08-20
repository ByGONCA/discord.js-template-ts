import { client } from "../../../structures/Client/client";
import { Events, ChannelSelectMenuInteraction } from 'discord.js'

export default {
    name: Events.InteractionCreate,
    async execute(interaction: ChannelSelectMenuInteraction) {

        if (interaction.isChannelSelectMenu()) {
            const channelselectmenu = client.channelselectmenu.get(interaction.customId);
            if (!channelselectmenu) return;
            channelselectmenu.execute(interaction);
        }
        
    }
}