import type {
	CommandInteraction,
	SlashCommandBuilder,
	ChatInputCommandInteraction,
    Client
} from 'discord.js';

import { client } from '../Client/client';

type Interactions = ChatInputCommandInteraction;
export interface Command {
	name: string;
	ownerOnly: boolean;
	cooldown?: number;
	usage: string;
    guildOnly: boolean;
	data:
		| SlashCommandBuilder
		| Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;

	execute: (
		interaction: ChatInputCommandInteraction
	) => void;
}