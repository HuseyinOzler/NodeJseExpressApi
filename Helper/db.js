const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb://hsyn:osm147.1@ds143293.mlab.com:43293/movieapi',{ useNewUrlParser: true })
    
    mongoose.connection.on('open',()=> {
        console.log('Baglantı Başarılı');
    });

    mongoose.connection.on('hata',(err)=> {
        console.log('Baglantı Hatası !!!',err);
    });
}