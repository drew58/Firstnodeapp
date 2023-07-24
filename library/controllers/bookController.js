var BookModel = require("../models/books")

exports.index = function(req, res){
     //res.send(BookModel.index())
     const books = BookModel.index()
     res.render("books",{title: "All the Books",books } )
}

// creating an endpoint

exports.create = function(req, res){
     //res.send("Create a new book")
     const books = BookModel.index()
     res.render("books_create", {title: "Create a new book", books})
}