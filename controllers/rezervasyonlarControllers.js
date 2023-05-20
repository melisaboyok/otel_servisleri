//2.	Yeni rezervasyon ekleme, silme ve bilgisi güncelleme işlemini gerçekleştirecek servisi yazınız. 

  const connection = require('../db');

  // Yeni rezervasyon ekleme
  exports.author_create_post = async function (req, res) {
    uye_id = req.body.uye_id;
    otel_id = req.body.otel_id;
    baslangic_tarihi = req.body.baslangic_tarihi;
    bitis_tarihi = req.body.bitis_tarihi;

    await connection.query("INSERT INTO rezervasyonlar VALUES (NULL, ?, ?, ?, ?)", [uye_id, otel_id, baslangic_tarihi, bitis_tarihi]);
    res.set("Content-type", "application/json");
    res.send(JSON.stringify({ status: true, data: { desc: "Rezervasyon işlemi oluşturuldu" } }));
  };
  
    // Rezervasyon silme 
  exports.author_delete_post = async function (req, res){

    let rezervasyon_id = req.body.rezervasyon_id;
    await connection.query("DELETE FROM rezervasyonlar WHERE rezervasyon_id=?", [rezervasyon_id]);
    res.set("Content-type","application/json");
    res.send(JSON.stringify({status:true, message:"Rezervasyon işlemi silindi."}));
   };

  // Rezervasyon güncelleme
   exports.author_update_post = async function (req, res) {

    rezervasyon_id = req.body.rezervasyon_id;
    uye_id = req.body.uye_id;
    otel_id = req.body.otel_id;
    baslangic_tarihi = req.body.baslangic_tarihi;
    bitis_tarihi = req.body.bitis_tarihi;

    await connection.query("UPDATE rezervasyonlar SET uye_id=?,otel_id=?,baslangic_tarihi=?,bitis_tarihi=? WHERE rezervasyon_id=?", [uye_id,otel_id,baslangic_tarihi,bitis_tarihi, rezervasyon_id]);
    res.set("Content-type","application/json");
    res.send(JSON.stringify({status:true, data:{desc:rezervasyon_id+" Rezervasyon işlemi Güncellendi"}}));
  };