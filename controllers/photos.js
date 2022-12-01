const Photo = require("../models/Photo");

module.exports = {
    getPhoto: async (req, res) => {
        try {
          const photo = await Photo.find({number: req.params.id});
          res.send(photo);
        } catch (err) {
          console.log(err);
        }
      },
      getPhotos: async (req, res) => {
        try{
          const photos = await Photo.find({}).length
          res.send(photos)
        }catch(err){
          console.log(err)
        }
      }
}
