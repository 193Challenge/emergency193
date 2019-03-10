//const db = require('../connection');

module.exports = {
    async store(req, res){
        //console.log("safdsa", db);
        var user = db.collection('Users').add({
            'name': req.body.name,
            'cpf': req.body.cpf,
            'tel': req.body.tel
        }).then(ref => {
            return res.json(ref.id);
          });            
    }
};
