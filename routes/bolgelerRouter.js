const express = require("express");
const router = express.Router();

// Controller Modülünü Çağırıyoruz
const author_controller = require("../controllers/bolgelerControllers");

// Bolgeler Yönlendirme İşlemleri //

// Hocam ben bütün işlemleri post kullanarak yaptım. Ayırca işleme uygun aşağı satırında diğer REST mimari seçenekleride bulunmaktadır.

// Bolgeler oluşturmak için POST isteği
router.post("/author/create", author_controller.author_create_post);


 // Bölge silmek için post isteği
router.post("/author/:id/delete", author_controller.author_delete_post);

// Bölge silmek için DELETE isteği
//router.delete("/author/:id/delete", author_controller.author_delete);


// Bölge güncellemek için POST isteği
router.post("/author/:id/update", author_controller.author_update_post);

// Bölge güncellemek için PUT isteği
//router.put("/author/:id/update", author_controller.author_update);

module.exports = router;