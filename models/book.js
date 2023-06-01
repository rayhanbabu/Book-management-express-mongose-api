const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
    {
        Title: {
            type: String,
            trim: true,
            required: true,
        },
        Author: {
            type: String,
            trim: true,
            required: true,
        },
        Description: {
            type: String,
            trim: true,
        },

        PublishYear: {
            type: Number,
             trim: true,
        }
    },
    { timestamps: true, versionKey:false }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;