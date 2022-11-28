const {cloudinary} = require("../middleware/cloudinary");
const Photo = require("../models/Photo");


module.exports = {
    getHome: (req, res) => {
      res.render("adminSignin.ejs");
    },
    getPostHome: async (req, res) => {
        try{
            const photos = await Photo.find({})
            res.render("adminPostHome.ejs", {photos: photos})
        }catch(err){
            console.log(err)
        }
    },
    postPhoto: async (req,res) => {
        try{
            // console.log(req.file) 
            const result = await cloudinary.uploader.upload(req.file.path);
            const photoLength = await Photo.find({})
            await Photo.create({
                image: result.secure_url,
                cloudinaryId: result.public_id,
                caption: req.body.caption,
                number: photoLength.length
            })
            console.log('Sucess')
            res.redirect('/home')
        }catch(err){
            console.log(err)
        }
    }
  };