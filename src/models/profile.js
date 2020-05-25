const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.Schema.Types.String,
            required: true
        },
        bio: {
            type: mongoose.Schema.Types.String,
            required: true
        },
        fb_id: {
            type: mongoose.Schema.Types.String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
