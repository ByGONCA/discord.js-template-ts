import type {

    ButtonInteraction
} from 'discord.js';

import { client } from '../Client/client';

export interface Button {
	name: string;
	ownerOnly: boolean;
	cooldown?: number;
    guildOnly: boolean;

	execute: (
		interaction: ButtonInteraction
	) => void;
}