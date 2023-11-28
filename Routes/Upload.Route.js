const express = require("express");
const UploadRouter = express.Router();
const { UploadModal } = require("../Model/Upload.Modal");

UploadRouter.get("/all", async (req, res) => {
  try {
    const uploads = await UploadModal.find({});

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

UploadRouter.patch("/:uploadId", async (req, res) => {
  const { uploadId } = req.params;
  try {
    const updatedUplaod = await UploadModal.findOneAndUpdate({ _id: uploadId }, req.body, {
      new: true,
    });
    if (!updatedUplaod) {
      return res.status(404).send(updatedUplaod);
    }
    res.status(200).send(updatedUplaod);
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});

UploadRouter.delete("/:uploadId", async (req, res) => {
  const { uploadId } = req.params;
  try {
    await UploadModal.findByIdAndDelete(uploadId);
    res.status(200).send({ msg: `deleted Successfully` });
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});

module.exports = { UploadRouter };
