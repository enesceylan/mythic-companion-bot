const { MessageEmbed } = require('discord.js');

module.exports.embedLink = (message) => {
        //url filter pattern
    const pattern = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/gm;
    const link =  message.content.match(pattern);

    //split the message to an array, find the index of url, replace url with [link here] and put it back together
    let textArr = message.content.split(' ');
    const linkIndex = textArr.findIndex(word => word.match(pattern));
    let hyperlink = '[[Companion](' + link + ')]';
    textArr.splice(linkIndex, 1, hyperlink);
    const text = textArr.join(' ');

    const websiteEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL()})
        .setDescription('**' + text + '**')
        .setFooter({text: "by Mythic Companion", iconURL: "https://media.discordapp.net/attachments/923331169263702107/930238589256744990/logo192.png"});

    message.channel.send({ embeds: [websiteEmbed] });
    message.delete({ timeout: 500});
}