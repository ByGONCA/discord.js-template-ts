## Features
* 🟦 Typescript
* 🔥 Slash commands ([SlashCommandBuilder](https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files))
* 🕛 Cooldowns, Owner Only, Guild Only
* 📦 Buttons & Modals & SelectMenus Handler
* 💪 Events & Command handlers
* 🍃 [MongoDB](https://www.mongodb.com/) Support with [Prisma](https://www.prisma.io/)

<br>

## Installation, Build and Run
1) Clone the repository then create a file named `.env` and fill it out accordingly
```js
TOKEN=YOUR_BOT_TOKEN
PREFIX=PREFIX
MONGO_URL=MONGO_CONNECTION_URL
GUILD_CHANNEL_ID=GUILD_CREATE_AND_DELETE_CHANNEL_ID
ONLINE_CHANNEL_ID=ONLINE_LOGS_CHANNEL_ID
```
2) Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

3) Run this commands in console
```js
yarn
yarn dev
```
4) If u want compile your Typescript project to Javascript run this command:
```js
tsc
```
