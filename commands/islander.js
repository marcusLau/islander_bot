module.exports = {
    name: 'islander',
    description: 'Give @user Islander role.',
    async execute(client, message, args, Discord) {

        // get user permissions to check before performing function
        let userPerms = message.channel.permissionsFor(message.member); 

        let islander = message.guild.roles.cache.find(r => r.name === 'Islander');
        let washed = message.guild.roles.cache.find(r => r.name === 'Washed Ashore');

        let user = message.mentions.members.first(); // !islander @user 

        if (!message.member.roles.cache.some(r => r.name === 'Islander')) { // if user is NOT an Islander
            user.roles.add(islander).catch(console.error); // Add Islander Role
            user.roles.remove(washed).catch(console.error); // Remove 
        }
        else {
            message.channel.send(user.toString() + " is already an Islander.");
        }        
    }
}