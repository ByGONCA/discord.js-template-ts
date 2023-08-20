import { Client, GatewayIntentBits, Partials, Collection } from "discord.js";
import { ExtendedClient } from "../interfaces/extendedclient";

export const client = new Client({
        intents: [
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildModeration,
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.GuildPresences,
            GatewayIntentBits.GuildEmojisAndStickers,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMessageTyping,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.GuildIntegrations,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.GuildWebhooks,
            GatewayIntentBits.AutoModerationConfiguration,
        ],
        partials: [
            Partials.Channel,
            Partials.GuildMember,
            Partials.GuildScheduledEvent,
            Partials.Message,
            Partials.Reaction,
            Partials.ThreadMember,
            Partials.User,
        ],
    }) as ExtendedClient

client.commands = new Collection();
client.cooldowns = new Collection();
client.button = new Collection();
client.channelselectmenu = new Collection();
client.stringselectmenu = new Collection();
client.roleselectmenu = new Collection();
client.modal = new Collection();
client.userselectmenu = new Collection();