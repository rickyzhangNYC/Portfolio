var express             = require("express"),
    router              = express.Router();
    
router.get("/", function(req,res){
    res.render("projects", {page: 'projects'});
})

module.exports = router;