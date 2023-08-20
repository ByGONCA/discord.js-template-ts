import type {
    UserSelectMenuInteraction
} from 'discord.js';

import { client } from '../Client/client';

export interface UserSelectMenu {
	name: string;
	ownerOnly: boolean;
	cooldown?: number;
    guildOnly: boolean;

	execute: (
		interaction: UserSelectMenuInteraction
	) => void;
}