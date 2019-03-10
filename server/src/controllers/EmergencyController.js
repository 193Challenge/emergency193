module.exports = {
    async store(req, res){
        var emergency = db.collection('Alerts').add({
            'name': req.body.name,
            'cpf': req.body.cpf,
            'long': req.body.long,
            'lat':  req.body.lat,
            'consc':  req.body.consc,
            'below': req.body.below,
            'talk': req.body.talk,
            'eyesopen': req.body.eyesopen,
            'stimulation': req.body.stimulation
        }).then(ref => {
            //console.log('Added alert with ID: ', ref.id);
            return res.json(ref.id);
          });  
    }
};