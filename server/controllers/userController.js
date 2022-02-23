const multer = require("multer");
const User = require("../models/db");

const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/");
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only Image is allowed"));
  }
};

const upload = multer({
  storage: multerConfig,
  fileFilter: isImage,
});

exports.upload = (req, res) => {
  console.log(req.file);

  res.status(200).json({
    success: "Success",
  });
};

exports.uploadImage = upload.single("images", (req, res) => {
  const image = req.file.filename;

  const newUserData = {
    image,
  };

  const newUser = new User(newUserData);

  newUser
    .save()
    .then(() => res.json("Image Uploaded"))
    .catch((error) => res.status(400).json(`Error:${error}`));
});
