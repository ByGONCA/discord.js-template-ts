import fs from 'node:fs';
import path from 'node:path';
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { client } from '../structures/Client/client';
import { readdirSync } from 'node:fs';
import chalk from 'chalk';

async function loadEvents(directory: string) {
    const eventFiles = readdirSync(directory, { withFileTypes: true });

    let loadedEventCount = 0;

    for (const file of eventFiles) {
        if (file.isDirectory()) {

            const subdirectory = path.join(directory, file.name);
            loadedEventCount += await loadEvents(subdirectory);
        } else if (file.isFile() && file.name.endsWith('.ts')) {

            const event = require(path.join(directory, file.name));
            if (event.default && event.default.name && typeof event.default.execute === 'function') {
                client.on(event.default.name, (...params: any[]) => event.default.execute(...params));
                loadedEventCount++;
            }
        }
    }

    return loadedEventCount;
}

async function loadAllEvents() {
    const eventsDirectory = path.join(__dirname, '../Events');
    const totalLoadedEvents = await loadEvents(eventsDirectory);
    console.log(chalk.bgHex('#F3980C')(`[ Events ]`) + chalk.hex('#F3980C')(` Loaded (#${totalLoadedEvents}) events!`));
}

export default loadAllEvents;
