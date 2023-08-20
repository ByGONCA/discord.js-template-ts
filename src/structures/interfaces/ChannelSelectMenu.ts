import type {
    ChannelSelectMenuInteraction
} from 'discord.js';

import { client } from '../Client/client';

export interface ChannelSelectMenu {
	name: string;
	ownerOnly: boolean;
	cooldown?: number;
    guildOnly: boolean;

	execute: (
		interaction: ChannelSelectMenuInteraction
	) => void;
}