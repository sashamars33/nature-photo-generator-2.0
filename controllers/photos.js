const Photo = require("../models/Photo");

module.exports = {
    getPhoto: async (req, res) => {
        try {
          console.log(req.params)
          const photo = await Photo.find({number: req.params.id});
          res.send(photo);
        } catch (err) {
          console.log(err);
        }
      }
}
