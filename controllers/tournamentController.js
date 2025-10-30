const Tournament = require("../models/Tournament");

// Créer un tournoi

/*
exports.createTournament = async (req, res) => {
  try {
    const tournament = await Tournament.create(req.body);
    res.status(201).json(tournament);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
*/

exports.createTournament = async (req, res) => {
    try {
        const { title, description,start_date, end_date, registration_deadline, max_teams, registration_fees, prize_pool, tournamentStatus} = req.body;
        const newTournament = new Tournament({ title, description, start_date, end_date, registration_deadline, max_teams, registration_fees, prize_pool, tournamentStatus });
        await newTournament.save();
        res.status(201).json(newTournament);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

// Lister tous les tournois
exports.getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.findAll();
    res.status(200).json(tournaments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupérer un tournoi par ID
exports.getTournamentById = async (req, res) => {
  try {
    const tournament = await Tournament.findByPk(req.params.id);
    if (!tournament) {
      return res.status(404).json({ error: "Tournament not found" });
    }
    res.status(200).json(tournament);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mettre à jour un tournoi
exports.updateTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findByPk(req.params.id);
    if (!tournament) {
      return res.status(404).json({ error: "Tournament not found" });
    }
    await tournament.update(req.body);
    res.status(200).json(tournament);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un tournoi
exports.deleteTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findByPk(req.params.id);
    if (!tournament) {
      return res.status(404).json({ error: "Tournament not found" });
    }
    await tournament.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
