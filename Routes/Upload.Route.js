const express = require("express");
const UploadRouter = express.Router();
const { UploadModal } = require("../Model/Upload.Modal");

UploadRouter.get("/all", async (req, res) => {
  const { projectId } = req.query;
  console.log("projectId", projectId);
  try {
    let uploads;
    if (projectId) {
      uploads = await UploadModal.find({ projectId });
    } else {
      uploads = await UploadModal.find();
    }
    res.status(200).send(uploads);
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});

UploadRouter.get("/:uploadId", async (req, res) => {
  const { uploadId } = req.params;
  try {
    const uploads = await UploadModal.findById(uploadId);
    res.status(200).send(uploads);
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});

UploadRouter.post("/", async (req, res) => {
  try {
    const upload = new UploadModal(req.body);
    await upload.save();
    res.status(200).send(upload);
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});

UploadRouter.patch("/", async (req, res) => {
  const { id } = req.body;
  try {
    const updatedUplaod = await UploadModal.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    console.log(updatedUplaod);
    if (!updatedUplaod) {
      return res.status(200).send(updatedUplaod);
    }
    res.status(200).send(updatedUplaod);
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});

UploadRouter.delete("/", async (req, res) => {
  const { id } = req.query;
  try {
    await UploadModal.findByIdAndDelete(id);
    res.status(200).send({ msg: `deleted Successfully` });
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});

module.exports = { UploadRouter };
