
const Book= require("../models/book.js");

exports.bookInsert = async (req, res) => {
    try {
     
        const { Author, Title } = req.body;
      
        if (!Title.trim()) {
            return res.json({ error: "Title is required" });
        }
        if (!Author) {
            return res.json({ error: "Author is required" });
        }

      
        const book = await new Book({
            Author:Author,
            Title:Title,
        }).save();


      
        res.json({
                status:200,
                msg:"Book Added Successfull ",

        });


    } catch (err) {
        console.log(err);
    }
};

exports.bookAll = async (req, res) => {
    try {
        const book = await Book.find();
        // 7. send response
        res.json({
            book:book,
            status:200
        });
    } catch (err) {
        console.log(err);
    }
};


exports.bookId = async (req, res) => {
    try {
        let id=req.params.id
        const book = await Book.findOne({
            "_id":id
        })
        res.json({
            book:book,
            status:200
        });
    } catch (err) {
        console.log(err);
    }
};

exports.bookEdit = async (req, res) => {
    try {
        let id=req.params.id
        const { Author, Title } = req.body;
        const book = await Book.updateOne(
            { "_id":id },

            {
                $set:{
                    Author:Author,
                    Title:Title,
                }
            }
        )
        res.json({
            status:200,
            msg:"Book Updated Successfull ",


        });
    } catch (err) {
        console.log(err);
    }
};

exports.bookDelete = async (req, res) => {
    try {
        let id=req.params.id
           Book.deleteOne({
            "_id":id
        })
        res.json({
            status:200,
            msg:"Book deleted Successfull ",
        });
    } catch (err) {
        console.log(err);
    }
};




