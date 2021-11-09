const express = require('express');
const router = express.Router();
const multer = require('multer');
const productController = require('../app/controllers/ProductController');

//Multer for Update Image
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'public/imgs');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
const upload = multer({
    storage:storage
});
const middleware = require('../app/middleware/authenticate');


router.get('/',middleware.userAuth, productController.index)


module.exports = router;