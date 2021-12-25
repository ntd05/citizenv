const newsRouter = require('./news');
const usersRouter = require('./users');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/users', usersRouter);

    app.use('/', siteRouter);

    // app.post('/search', (req, res) => {
    //     res.send('search')
    // })
}

module.exports = route;
