const express = require("express");
const app = express();

const exp = require("constants");
const https = require("https");

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

 const uyelerRouter = require("./routes/uyelerRouter"); 
 const rezervasyonlarRouter = require("./routes/rezervasyonlarRouter"); 
 const otellerRouter = require("./routes/otellerRouter"); 
 const bolgelerRouter = require("./routes/bolgelerRouter"); 


const bodyParser = require("body-parser");

    // Uygulamanın 3012 portunda çalışacak
    app.listen(3012, function (err) {
        if (err) {
          throw err
        }
        console.log("Uygulama 3012 portunda başarıyla çalıştırıldı");
      });
      app.use(bodyParser.json() );       // JSON-encoded desteği
      app.use(bodyParser.urlencoded({     // URL-encoded desteği
      extended: true
      }));
      app.use("/uyeler", uyelerRouter);
      app.use("/rezervasyonlar", rezervasyonlarRouter);
      app.use("/oteller", otellerRouter);
      app.use("/bolgeler", bolgelerRouter);
       
       
