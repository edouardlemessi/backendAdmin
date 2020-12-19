const mongoose = require('mongoose');

var coffeeSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: 'This field is required.'
     },
    price: {
        type: Number,
        required: 'This field is required.'
     }
});

mongoose.model('Coffee',coffeeSchema);