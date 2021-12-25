const User = require('../models/User');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res) {
        // Dùng Callback
        // User.find({}, function(err, users) {
        //     if (!err) res.json(users)
        //     else res.status(400).json({error: 'ERROR'});
        // })

        // Dùng Promise
        User.find({})
            .then((users) => {
                res.render('home', { users: multipleMongooseToObject(users) });
            })
            .catch((error) => next(error));

        //res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
