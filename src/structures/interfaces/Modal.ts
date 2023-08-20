import type {
    ModalSubmitInteraction
} from 'discord.js';

import { client } from '../Client/client';

export interface Modal {
	name: string;
	ownerOnly: boolean;
	cooldown?: number;
    guildOnly: boolean;

	execute: (
		interaction: ModalSubmitInteraction
	) => void;
}