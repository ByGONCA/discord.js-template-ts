import type {
    RoleSelectMenuInteraction
} from 'discord.js';

import { client } from '../Client/client';

export interface RoleSelectMenu {
	name: string;
	ownerOnly: boolean;
	cooldown?: number;
    guildOnly: boolean;

	execute: (
		interaction: RoleSelectMenuInteraction
	) => void;
}