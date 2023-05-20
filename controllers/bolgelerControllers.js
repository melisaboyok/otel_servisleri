//4.	Yeni bölge ekleme, silme ve bilgisi güncelleme işlemini gerçekleştirecek servisi yazınız

const connection = require('../db');

  // Bölge ekleme

  exports.author_create_post = async function (req, res) {
   //bolgeler (bolge_id,bolge_adi,il_adi,ilce_adi)
    bolge_adi = req.body.bolge_adi;
    il_adi = req.body.il_adi;
    ilce_adi = req.body.ilce_adi;
    await connection.query("INSERT INTO bolgeler VALUES (NULL, ?, ?, ?)", [bolge_adi,il_adi, ilce_adi]);
    res.set("Content-type", "application/json");
    res.send(JSON.stringify({ status: true, data: { desc: "Bölge bilgileri eklendi" } }));
  };
  
  // Bölge Güncelleme
  exports.author_update_post = async function (req, res) {
  //bolgeler (bolge_id,bolge_adi,il_adi,ilce_adi)
   bolge_id = req.body.bolge_id;
   bolge_adi = req.body.bolge_adi;
   il_adi = req.body.il_adi;
   ilce_adi = req.body.ilce_adi;

  await connection.query("UPDATE bolgeler SET bolge_adi=?,il_adi=?,ilce_adi=? WHERE bolge_id=?", [bolge_adi,il_adi,ilce_adi,bolge_id]);
  res.set("Content-type","application/json");
  res.send(JSON.stringify({status:true, data:{desc:bolge_id+" Bölge bilgileri güncellendi"}}));
  };

  //Bölge Silme
   exports.author_delete_post = async function (req, res) {
    let bolge_id = req.body.bolge_id;
    await connection.query("DELETE FROM bolgeler WHERE bolge_id=?", [bolge_id]);
    res.set("Content-type","application/json");
    res.send(JSON.stringify({status:true, message:" Bölge bilgisi silindi."}));
  };
  
 