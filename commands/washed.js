module.exports = {
    name: 'washed',
    description: 'Give @user Washed Ashore role.',
    async execute(client, message, args, Discord) {

        // get user permissions to check before performing function
        let userPerms = message.channel.permissionsFor(message.member); 

        let islander = message.guild.roles.cache.find(r => r.name === 'Islander');
        let washed = message.guild.roles.cache.find(r => r.name === 'Washed Ashore');

        let user = message.mentions.members.first(); // !washed @user 

        if (!message.member.roles.cache.some(r => r.name === 'Washed Ashore')) { 
            user.roles.add(washed).catch(console.error); // Add Washed Role
            user.roles.remove(islander).catch(console.error); // Remove Islander

            // message.channel.overwritePermissions(washed, {'SEND_MESSAGES': false, 'VIEW_CHANNEL': false});

            // message.channel.overwritePermissions([
            //     {
            //         id: user.id,
            //         deny: ['SEND_MESSAGES'],
            //     },
            //     {
            //         id: user.id,
            //         allow: [],
            //     },
            // ]);

            // message.guild.channels.cache.forEach(ch => {
            //     if(ch.type == "text") {
            //         ch.overwritePermissions( [ {
            //             id: washed.id,
            //             deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
            //         },
            //     ], 'Needed to change permissions');
            //     } 
            // });
        }
        else {
            message.channel.send(user.toString() + " is already Washed Ashore.");
        }        
    }
}