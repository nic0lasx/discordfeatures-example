// This repository has no handler! It is dedicated only to presentations and examples of the new features.

const { MessageActionRow, MessageSelectMenu } = require('discord.js');

// Example of a button to take a any role.
if(interaction.isButton()) {
    if(interaction.customId == "button-id") {
        interaction.member.roles.add("role-id")
    }
}

// Example of a menucontext to take a any role.

if(interaction.customId == "menu-context") {
    const row = new MessageActionRow()
        .addComponents(new MessageSelectMenu()
        .setCustomId('menu-context')
        .setPlaceholder('Select a role.')
        .addOptions([
            {
                label: "Role 1",
                value: "role-one"
            },
            {
                label: "Role 2", 
                value: "role-two"
            }
        ]),
    );
    interaction.reply({ content: `Select`, components: [row] }).then(msg => {
        // Creating a Collector
        const collector = msg.createMessageComponentCollector({
            componentType: 'SELECT_MENU',
            time: 20000
        });
        collector.on('collect', i => {
            if(i.user.id === interaction.user.id) {
                if(i.values[0] === "role-one") {
                    msg.delete();
                    interaction.member.roles.add('roleid')
                } else if(i.values[0] === "role-two") {
                    msg.delete();
                    interaction.member.roles.add('roleid')
                }
            }
        })
    })
}
