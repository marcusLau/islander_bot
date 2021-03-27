module.exports = {
    name: 'addrole',
    minArgs: 2,
    expectedArgs: "<Target user's @> <role name>",
    // permissions: "ADMINISTRATOR", 
    async execute(client, message, args, Discord) {
        const targetUser = message.mentions.users.first();
        console.log(targetUser);
        if (!targetUser) {
            message.channel.send("Please specify a valid user.");
            return;
        }

        // !addrole @ Washed Ashore
        args.shift()

        const roleName = args.join(' ')
        const {guild} = message; // Destructure proprety of guild from message

        const role = guild.roles.cache.find((role) => {
            return role.name === roleName
        })
        if (!role) {
            message.channel.send(`There is no role with the name: "${roleName}"`);
            return;
        }

        const mem = guild.members.cache.get(targetUser.id);
        mem.roles.add(role).catch(console.error);

        console.log("HERE");
    }
}