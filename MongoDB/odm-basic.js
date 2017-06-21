var mongoose = require('mongoose');

// Definindo um esquema
var tankSchema = new mongoose.Schema({name: 'string', size: 'string'});
tankSchema.methods.print = function() { console.log('I am', this.name, 'the',this.size)};

// Compilando em um modelo
var Tank = mongoose.model('Tank',tankSchema);

mongoose.connect('mongodb://127.0.0.1:27017/demo');
var db = mongoose.connection;
db.once('open',function callback(){
    console.log('connected!');

    var tony = new Tank({name: 'tony', size: 'small'});
    tony.print();
    tony.save(function(err){
        Tank.findOne({name:'tony'}).exec(function(err,tank){
            tank.print();
            db.collection('tanks').drop(function(){
                db.close();
            });
        });
    });
});
