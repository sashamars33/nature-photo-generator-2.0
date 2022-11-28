const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer')
const photosController = require("../controllers/photos");
const homeController = require("../controllers/home");

router.post("/postphoto", upload.single("file"), homeController.postPhoto)
router.get('/:id', photosController.getPhoto)

module.exports = router;