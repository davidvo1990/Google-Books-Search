
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  authors: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  saved: {
    type: Boolean,
    default:false
  }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Article model
module.exports = Book;
