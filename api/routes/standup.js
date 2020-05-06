const Standup = require('../../models/standup')

module.exports = function (router) {
    
    router.get('/', function (req, res) {
      
      Standup.find({}, (err, standup) => {
          if(err){
              res.json({success: false, message: err});
          } else {
              if(!standup) {
                  c
              } else {
                  res.json({success: true, standup: standup});
              }
          }
      })
    })
    
    
    router.post('/', function (req, res) {
        let note = new Standup(req.body)
        note.save(function (err, note) {
            if(err) {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

   
    router.put('/', (req, res) => {
        if(!req.body._id) {
            res.json({success: false, message: 'no standup id provided'});
        } else {
            Standup.findOne({_id: req.body._id}, (err, standup) => {
                if(err) {
                    res.json({success: false, message: 'not a valid standup'});
                } else {
                    standup.productName = req.body.productName;
                    standup.productDescription = req.body.productDescription;
                    standup.productPrice = req.body.productPrice;
                    standup.manuDate = req.body.manuDate;
                    standup.expDate = req.body.expDate;
                    standup.barcode = req.body.barcode;
                    standup.save((err) => {
                        if(err){
                            res.json({success: false, message: 'err'});
                        } else {
                            res.json({success: true, message: 'standup updated'});
                        }
                    });
                }
            });
        }
    });
    router.delete('/:id', (req, res) => {
        if(!req.params.id) {
            res.json({success: false, message: 'no id provided'});
        } else {
            Standup.findOne({_id: req.params.id}, (err, standup) => {
                if(err) {
                    res.json({success: false, message: 'invalid id'});
                } else {
                    standup.remove((err) => {
                        if(err){
                            res.json({success: false, message: 'err'});
                        } else {
                            res.json({success: true, message: 'standup deleted'});
                        }
                    });
                }
            });
        }
     })
}
