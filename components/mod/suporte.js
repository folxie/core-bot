module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("44475a")
        .setTitle(`${message.author.username} clique aqui entrar no meu servidor de suporte!`)
        .setDescription(`Ou fale com meu criador! deułx ƁÐÐ#0707 (615685442334883891)`)
        .setURL("https://discord.gg/R7vFHWV")
        .setImage("https://media3.giphy.com/media/wRfVij0ow9h28/giphy.gif")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}