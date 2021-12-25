const City = require('../models/city');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class CityController {
    // [GET] /Citys/:slug
    show(req, res, next) {
        City.findOne({ slug: req.params.slug })
            .then((city) => {
                res.json(city);
            })
            .catch(next);
    }

    // [GET] /citys/all
    showAll(req, res, next) {
        City.find({})
            .then((citys) =>
                // res.render('citys/all', {
                //     citys: multipleMongooseToObject(citys),
                // })
                res.json(citys)
            )
            .catch(next);
    }

    // [GET] /citys/create
    create(req, res, next) {
        res.render('citys/create');
    }

    // [GET] /citys/:id/edit
    edit(req, res, next) {
        City.findById(req.params.id)
            .then((city) =>
                res.render('citys/edit', { city: mongooseToObject(city) }),
            )
            .catch(next);
    }

    // [POST] /citys/store
    store(req, res, next) {
        const formData = req.body;
        const city = new City(formData);
        city.save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    // [PUT] /citys/:id
    update(req, res, next) {
        City.updateOne({ _id: req.params.id }, req.body)
            .then((citys) => res.json(citys))
            .catch(next);
    }

    // [DELETE] /citys/:id
    delete(req, res, next) {
        City.deleteOne({ _id: req.params.id })
            .then((citys) => res.json(citys)) // Xóa xong quay lại trang cũ
            .catch(next);
    }
}

module.exports = new CityController();