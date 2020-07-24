module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();

    if (!args[1]) return message.channel.send("`Você não me informou em quem quer lançar esta mágia :/`")

    if (!usuario1) usuario1 = args[1];
     let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("4affe4")
        .setDescription(`${message.author} usou confringo em ${usuario1}`)
        .setImage("https://cdn.discordapp.com/attachments/713829125994971147/724082639752921198/confringo_.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}