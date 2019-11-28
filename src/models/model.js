const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    Bookname: {
        type: String
    },

    Authorname: {
        type: String
    },

    quantity: {
        type: String
    }
});

const Schema1 = (module.exports = mongoose.model("Schema", Schema));
// It enables an Angular module to expose some of its components to the other modules in the applications.