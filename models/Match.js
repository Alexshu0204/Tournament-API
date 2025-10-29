const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
    tournoi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament',
        require: true,
    },
    player1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    player2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
   P1_Score: {
    type: Number,
    default: 0,
   },
    P2_Score: {
    type: Number,
    default: 0,
   },
   date: {
    type:Date,
    required: true,
   },
   winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
   },
});

module.exports = mongoose.model('Match', MatchSchema);