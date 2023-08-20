import { client } from '../src/structures/Client/client'
import { config } from 'dotenv'
import { readdirSync } from 'node:fs'
config()

if (!process.env.TOKEN) {
    console.error('Please put the token in the .env file')
    process.exit(1)
}

readdirSync("./src/Handlers").forEach((handler) => {
    if (handler.endsWith(".ts")) {
    const handlerModule = require(`./Handlers/${handler}`).default;
    if (typeof handlerModule === "function") {
        handlerModule(client);
    } else {
        console.error(
        `Invalid Handler Module at './Handlers/${handler}'. It should be a function.`
        );
    }
    }
});

client.login(`${process.env.TOKEN}`).catch( async (error) => {
    console.warn('Error logging in client!')
    console.error(error)
    process.exit(1)
})