const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://victorbraga:victorbragagh@cluster0.mpucf.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;