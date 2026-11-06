const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    telephone: { type: String },
    entreprise: { type: String },
    statut: {
      type: String,
      enum: ["prospect", "actif", "inactif"],
      default: "prospect",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", clientSchema);