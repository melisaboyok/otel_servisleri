//1.	Yeni bir üye oluşturacak servisi yazınız. Üye adı, parola ve e-posta bilgileri POST yöntemi ile gönderilecek. Kayıt başarılı ise kayıt başarılı şeklinde JSON formatında dönüş olacak. Parola bilgisi SHA1 olarak saklanacak.
const connection = require('../db');
const crypto = require('crypto');

exports.author_create_post = async function (req, res){
  const uye_adi = req.body.uye_adi;
  const eposta = req.body.eposta;
  const parola = req.body.parola;

  const hashedParola = crypto.createHash('sha1').update(parola).digest('hex');
  await connection.query("INSERT INTO uyeler1 VALUES(NULL,?,?,?,NOW(),NOW())",[uye_adi, eposta, hashedParola]);

  res.set("Content-type","application/json");
  res.send(JSON.stringify({status:true, data:{desc:"Yeni üye eklendi"}}));
};