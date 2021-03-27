const { GuildAuditLogs, GuildAuditLogsEntry } = require("discord.js");

module.exports = {
    name: 'age',
    description: 'Get @user age within their current role.',
    async execute(client, message, args, Discord) { 

        // check when user was added into 'Washed Ashore' role
            // Check if time in 'Washed Ashore' role is >= x time to kick
                // kick user from server if roleTime >= x time to kick

        // compare role added timestamp ?
        console.log(GuildAuditLogsEntry); 




    }
}