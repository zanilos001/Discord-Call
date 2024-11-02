const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
data: new SlashCommandBuilder()
    .setName("come")
    .setDescription("Call the member for come.")
    .addUserOption(option => option.setName("user").setDescription("The user to call him.").setRequired(true)),
    async execute(interaction){
const users = interaction.options.getUser("user")
await interaction.reply({ content: "تم نداء الشخص بنجاح"});
        users.send({ content: `**تم ذكرك في : <#${interaction.channel.id}>
من قبل : ${interaction.user}**`});
},
};
