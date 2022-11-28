const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer')
const photosController = require("../controllers/photos");
const homeController = require("../controllers/home");



// router.get("/", photosController.getPhotos);
// router.get("/photo", photosController.getPhoto)
router.post("/postphoto", upload.single("file"), homeController.postPhoto)



module.exports = router;