const express = require("express");
const router = express.Router();

// Controller Modülünü Çağırıyoruz
const author_controller = require("../controllers/uyelerControllers");

// Uye Yönlendirme İşlemleri //

// Uye oluşturmak için POST isteği
router.post("/author/create", author_controller.author_create_post);


module.exports = router;