const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    publicationDate: { type: Date },
    genre: { type: String },
    author: { type: mongoose.Schema.Types.Mixed, required: true }, // Embed author details
});

module.exports = mongoose.model('Book', bookSchema);
