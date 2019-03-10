module.exports = {
    async store(req, res){
        var medsheet = db.collection('Medical Sheet').add({
            'userid': req.body.userid,
            'bloodgroup': req.body.bloodgroup,
            'medicine': req.body.medicine,
            'weight': req.body.weight,
            'height':  req.body.height,
            'contactNumber':  req.body.contactNumber,
            'contactName':  req.body.contactName
        }).then(ref => {
            console.log('Ficha Medica with ID: ', ref.id);
            return res.json(ref.id);
          });  
    }
};