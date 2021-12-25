const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const User = new Schema(
    {
        CMND: { type: String, require: true },
        name: { type: String, require: true },
        DofB: { type: String, require: true },
	    Sex: { type: String, require: true },
        Address: { type: String, require: true },
        religion: { type: String, require: true },
        Ethnic:{ type: String, require: true },
	    EduLevel: { type: String, require: true },
        Job: { type: String, require: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
