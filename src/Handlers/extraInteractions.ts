import { Collection } from "discord.js";
import fs from 'node:fs';
import path from 'node:path';
import { ExtraInteractions } from "../structures/interfaces/ExtraInteractions";
import { client } from "../structures/Client/client";
import chalk from 'chalk'


function Interactions(
    collection: Collection<string, any>,
    folderPath: string
): number {
    let totalFileCount = 0;

    const readDirectory = (currentPath: string) => {
        const files = fs.readdirSync(currentPath);

        for (const file of files) {
            const filePath = path.join(currentPath, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                readDirectory(filePath);
            } else if (file.endsWith('.ts')) {
                const selectMenu = require(filePath).default;
                collection.set(selectMenu.id, selectMenu);
                totalFileCount++;
            }
        }
    };

    readDirectory(folderPath);

    return totalFileCount;
}

const { userselectmenu, roleselectmenu, channelselectmenu, stringselectmenu ,modal, button } = client;

const userFolderPath = path.resolve(__dirname, '../Interactions/SelectMenus/User');
const userFileCount = Interactions(userselectmenu, userFolderPath);
console.log(chalk.bgHex('#FF0000')(`[ UserSelectMenus ]`) + chalk.hex('#FF0000')(` Loaded (#${userFileCount}) UserSelectMenus!`));

const roleFolderPath = path.resolve(__dirname, '../Interactions/SelectMenus/Role');
const roleFileCount = Interactions(roleselectmenu, roleFolderPath);
console.log(chalk.bgHex('#F3980C')(`[ RoleSelectMenus ]`) + chalk.hex('#F3980C')(` Loaded (#${roleFileCount}) RoleSelectMenus!`));

const stringFolderPath = path.resolve(__dirname, '../Interactions/SelectMenus/String');
const stringFileCount = Interactions(stringselectmenu, stringFolderPath);
console.log(chalk.bgYellow(`[ StringSelectMenus ]`) + chalk.yellow(` Loaded (#${stringFileCount}) StringSelectMenus!`));

const channelFolderPath = path.resolve(__dirname, '../Interactions/SelectMenus/Channel');
const channelFileCount = Interactions(channelselectmenu, channelFolderPath);
console.log(chalk.bgGreen(`[ ChannelSelectMenus ]`) + chalk.green(` Loaded (#${channelFileCount}) ChannelSelectMenus!`));

const modalFolderPath = path.resolve(__dirname, '../Interactions/Modals');
const modalFileCount = Interactions(modal, modalFolderPath);
console.log(chalk.bgHex('#3073FA')(`[ Modals ]`) + chalk.hex('#3073FA')(` Loaded (#${modalFileCount}) Modals!`));

const buttonFolderPath = path.resolve(__dirname, '../Interactions/Buttons');
const buttonFileCount = Interactions(button, buttonFolderPath);
console.log(chalk.bgHex('#6308E2')(`[ Buttons ]`) + chalk.hex('#6308E2')(` Loaded (#${buttonFileCount}) Buttons!`));

async function Ignore() {

}

export default Ignore
