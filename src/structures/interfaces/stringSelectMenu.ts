import type {
    StringSelectMenuInteraction
} from 'discord.js';

import { client } from '../Client/client';

export interface StringSelectMenu {
	name: string;
	ownerOnly: boolean;
	cooldown?: number;
    guildOnly: boolean;

	execute: (
		interaction: StringSelectMenuInteraction
	) => void;
}