const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://zeeshannasir:zeeshan@cluster0.iltt7.mongodb.net/ecommerce"
    );
};

module.exports = connect;
