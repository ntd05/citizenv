const User = require('../models/User');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class UserController {
    // [GET] /users/:slug
    show(req, res, next) {
        User.findOne({ slug: req.params.slug })
            .then((user) => {
                res.json(user);
            })
            .catch(next);
    }

    // [GET] /users/all
    showAll(req, res, next) {
        User.find({})
            .then((users) =>
                res.render('users/all', {
                    users: multipleMongooseToObject(users),
                })
                //res.json(users)
            )
            .catch(next);
    }

    // [GET] /users/allData
    showData(req, res, next) {
        User.find({})
            .then((users) =>
                res.render('users/all', {
                    users: multipleMongooseToObject(users),
                })
                //res.json(users)
            )
            .catch(next);
    }

    // [GET] /users/create
    create(req, res, next) {
        res.render('users/create');
    }

    // [GET] /users/:id/edit
    edit(req, res, next) {
        User.findById(req.params.id)
            .then((user) =>
                res.render('users/edit', { user: mongooseToObject(user) }),
            )
            .catch(next);
    }

    // [POST] /users/store
    store(req, res, next) {
        const formData = req.body;
        const user = new User(formData);
        user.save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    // [PUT] /users/:id
    update(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then((users) => res.json(users))
            .catch(next);
    }

    // [DELETE] /users/:id
    delete(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then((users) => res.json(users)) // Xóa xong quay lại trang cũ
            .catch(next);
    }
}

module.exports = new UserController();