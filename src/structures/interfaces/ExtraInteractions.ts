import type {
    ChannelSelectMenuInteraction, Interaction
} from 'discord.js';

import { client } from '../Client/client';

export interface ExtraInteractions {
    id: string;

	execute: (
		interaction: Interaction
	) => Promise<void>;
}