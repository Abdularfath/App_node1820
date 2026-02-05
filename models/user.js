const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,

    },
   


    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/ // Simple email validation regex

    },


    password: {
      type: String,
      required: true,
    },

     phone:{
      type: String,
      required: true,
      unique: false,
      match: /^[0-9]{10}$/, // Simple phone number validation regex
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);


const User = mongoose.model("User", userSchema);

      
module.exports = User;
    