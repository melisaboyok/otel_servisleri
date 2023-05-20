//	Yeni otel ekleme, silme ve bilgisi güncelleme işlemini gerçekleştirecek servisi yazınız. 

const connection = require('../db');

  // Yeni otel ekleme
  exports.author_create_post = async function (req, res){
    //oteller (otel_id,otel_adi,bolge_id,yildiz_sayisi,gunluk_ucret)

    otel_adi = req.body.otel_adi;
    bolge_id = req.body.bolge_id;
    yildiz_sayisi = req.body.yildiz_sayisi;
    gunluk_ucret = req.body.gunluk_ucret;

    await connection.query("INSERT INTO oteller VALUES (NULL, ?, ?, ?, ?)", [otel_adi,bolge_id, yildiz_sayisi, gunluk_ucret]);
    res.set("Content-type", "application/json");
    res.send(JSON.stringify({ status: true, data: { desc: "Otel bilgileri eklendi" } }));
  };
  
   // Otel silme post 
  exports.author_delete_post = async function (req, res) {
    let otel_id = req.body.otel_id;
    await connection.query("DELETE FROM oteller WHERE otel_id=?", [otel_id]);
    res.set("Content-type","application/json");
    res.send(JSON.stringify({status:true, message:" Otel bilgileri silindi."}));
   };
  
  // Otel güncelleme POST.
 exports.author_update_post =async function (req, res) {

  //oteller (otel_id,otel_adi,bolge_id,yildiz_sayisi,gunluk_ucret)
    otel_id = req.body.otel_id;
    otel_adi = req.body.otel_adi;
    bolge_id = req.body.bolge_id;
    yildiz_sayisi = req.body.yildiz_sayisi;
    gunluk_ucret = req.body.gunluk_ucret;
 
    await connection.query("UPDATE oteller SET otel_adi=?,bolge_id=?,yildiz_sayisi=?,gunluk_ucret=? WHERE otel_id=?", [otel_adi,bolge_id,yildiz_sayisi,gunluk_ucret, otel_id]);
    res.set("Content-type","application/json");
    res.send(JSON.stringify({status:true, data:{desc:otel_id+" Otel bilgileri Güncellendi"}}));
   };