const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function ({addVariant}) {
    addVariant("grup-open", ":merge(.group).open &");
    addVariant("peer-open", ":merge(.peer).open ~ &");
});

module.exports = openVariant;
