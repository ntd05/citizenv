const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const cors = require('cors');


const app = express();
const port = 3001;

const route = require('./routes');
const db = require('./config/db');

// Chuyển POST -> PUT để edit form
app.use(methodOverride('_method'));

// Connect db
db.connect();

app.use(cors());
// Midd xử lí dữ liệu submit form
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// Sử dụng cho fetch
//app.use(express.json)

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    exphbs({
        extname: 'hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});
