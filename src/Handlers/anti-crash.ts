
const { EmbedBuilder, WebhookClient } = require("discord.js");
const { inspect } = require("util");

import { TextChannel } from 'discord.js';
import { client } from '../structures/Client/client'
import chalk from 'chalk'
import { config } from 'dotenv';
config()
async function antiCrash() {

    process.on("unhandledRejection", (reason, p) => {
        console.log(
        chalk.white("["),
        chalk.bgRed.bold("AntiCrash"),
        chalk.white("]"),
        chalk.gray(" : "),
        chalk.white.bold("Unhandled Rejection/Catch")
        );
        console.log(reason, p);
    });
    process.on("uncaughtException", (err, origin) => {
        console.log(
        chalk.white("["),
        chalk.bgRed.bold("AntiCrash"),
        chalk.white("]"),
        chalk.gray(" : "),
        chalk.white.bold("Uncaught Exception/Catch")
        );
        console.log(err, origin);
    });
}

export default antiCrash