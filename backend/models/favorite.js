const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    factId: {
      type: String,
      required: [true, "El ID del cat fact es obligatorio"],
    },
    text: {
      type: String,
      required: [true, "El texto del cat fact es obligatorio"],
    },
    type: {
      type: String,
      default: "cat",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

favoriteSchema.index({ owner: 1, factId: 1 }, { unique: true });

module.exports = mongoose.model("Favorite", favoriteSchema);
