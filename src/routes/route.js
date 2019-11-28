const express = require('express');

const router = express.Router();

const books = require('../models/model');

//retrieving contact

router.get('/user', (req, res, next) => {
    books.find(function(err, users) {
        res.json(user);
    });
});

//add contact

router.post('/addinfo', (req, res, next) => {
    let newadmin = new books({
        Bookname: req.body.Bookname,

        Authorname: req.body.Authorname,

        quantity: req.body.quantity
    });

    newadmin.save((err, admin) => {
        if (err) {
            res.json({
                msg: 'Failed to add contact'
            });
        } else {
            res.json({
                msg: 'Contact added successfully'
            });
        }
    });
});

//delete contacts

router.delete('/deletinfo/:id', (req, res, next) => {
    books.remove({
        _id: req.params.id
    }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

//edit
router.put('/item/:id', (req, res, next) => {
    books.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                Bookname: req.body.Bookname,

                Authorname: req.body.Authorname,

                quantity: req.body.quantity
            }
        },
        function(err, result) {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        }
    );
});

module.exports = router;