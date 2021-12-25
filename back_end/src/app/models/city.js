const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const City = new Schema(
    {
        Ma: { type: String, require: true },
        name: { type: String, require: true },
        TinhTrang: { type: String, require: true },
	    taikhoan: { type: String, require: true },
        Matkhau: { type: String, require: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('City', City);
