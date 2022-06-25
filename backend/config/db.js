const mongoose = require("mongoose");

const url = "mongodb+srv://doctor:doctor123@cluster0.ki3ln0m.mongodb.net/test";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;