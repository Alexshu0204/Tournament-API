const mongoose = required('mongoose');

const TournamentSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['jeu vidéo', 'sport', 'autre'],
        required: true,
    },
    SportOrGame: {
        type: String,
        required: true,
    },
    beginDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required,
    },
    registration_fees: {
        type: Number,
        default: 0,
    },
    winnerPrice: {
        type: Number,
        default: 0,
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    matchs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Match',
    }],
    organisateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Tournament', TournamentSchema);