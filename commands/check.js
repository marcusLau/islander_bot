module.exports = {
    name: 'check',
    description: 'Check user role.',
    async execute(client, message, args, Discord) {
        if (message.member.roles.cache.has('824896586747740200')) {
            message.channel.send("Your role is: Islander");
        }
        else if (message.member.roles.cache.has('822069429897789482')) {
            message.channel.send('Your role is: Washed Ashore'); 
        }
    }
}