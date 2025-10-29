const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    nickname: {
        type: String,
        required: true,
        unique: true
    },

    role: {
        type: String,
        enum: ['participant', 'admin'],
        default: 'participant'
    },

    registrationDate: {
        type: Date,
        default: Date.now,
    },

    registrationTournament: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament',
    }],

    organized_tournaments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament',
    }],

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);