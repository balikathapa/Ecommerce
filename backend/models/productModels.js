const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product name"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product's price"],
  },

  images: [
    {
      public_id: {
        type: String,
        required: [true, "Please enter id"],
      },
      url: {
        type: String,
        required: [true, "Please enter URL"],
      },
    },
  ],
  noOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: [true, "Please Enter Name"],
      },
      commet: {
        type: String,
      },
      rating: {
        type: Number,
        required: [true, "Please Enter Rating"],
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please select a Category"],

    enum: [
      "Electronics",
      "Clothes",
      "Food",
      "Smart Phones",
      "Laptop",
      "Cameras",
      "Beauty",
      "Home Appliances",
    ],
  },
});

module.exports = mongoose.model("Product", productSchema);
