import { client } from "../../../structures/Client/client";
import { Events, RoleSelectMenuInteraction } from 'discord.js'

export default {
    name: Events.InteractionCreate,
    async execute(interaction: RoleSelectMenuInteraction) {

        if (interaction.isRoleSelectMenu()) {
            const roleselectmenu = client.roleselectmenu.get(interaction.customId);
            if (!roleselectmenu) return;
            roleselectmenu.execute(interaction);
        }
        
    }
}