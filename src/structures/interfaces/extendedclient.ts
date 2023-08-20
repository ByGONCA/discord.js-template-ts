import { Client, Collection, Snowflake } from "discord.js";
import { Command } from "./slashcommands";
import { Button } from "./buttons";
import { StringSelectMenu } from "./stringSelectMenu";
import { RoleSelectMenu } from "./RoleSelectMenu";
import { ChannelSelectMenu } from "./ChannelSelectMenu";
import { UserSelectMenu } from "./UserSelectMenu";
import { Modal } from "./Modal";


export interface ExtendedClient extends Client {
    commands: Collection<string, Command>;
    cooldowns: Collection<string, Collection<Snowflake, number>>;
    button: Collection<string, Button>;
    stringselectmenu: Collection<string, StringSelectMenu>;
    userselectmenu: Collection<string, UserSelectMenu>;
    channelselectmenu: Collection<string, ChannelSelectMenu>;
    roleselectmenu: Collection<string, RoleSelectMenu>;
    modal: Collection<string, Modal>;
}