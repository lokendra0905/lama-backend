const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProjectModal = mongoose.model("project", ProjectSchema);

module.exports = {
  ProjectModal,
};
