const express = require("express");
const router = express.Router();

// Controller Modülünü Çağırıyoruz
const author_controller = require("../controllers/rezervasyonlarControllers");

// Rezervasyon Yönlendirme İşlemleri //

// Hocam ben bütün işlemleri post kullanarak yaptım. Ayırca işleme uygun aşağı satırında diğer REST mimari seçenekleride bulunmaktadır.

// Rezervasyon oluşturmak için POST isteği
router.post("/author/create", author_controller.author_create_post);


// Rezervasyon silmek için post isteği
 router.post("/author/:id/delete", author_controller.author_delete_post);

// Rezervasyon silmek için DELETE isteği
//router.delete("/author/:id/delete", author_controller.author_delete);


// Rezervasyon güncellemek için POST isteği
router.post("/author/:id/update", author_controller.author_update_post);

// Rezervasyon güncellemek için PUT isteği
//router.put("/author/:id/update", author_controller.author_update);

module.exports = router;