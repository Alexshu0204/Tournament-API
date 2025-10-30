const express = require("express");
const router = express.Router();
const tournamentController = require("../controllers/tournamentController");

// Routes pour les tournois
router.post("/", tournamentController.createTournament);
router.get("/", tournamentController.getAllTournaments);
router.get("/:id", tournamentController.getTournamentById);
router.put("/:id", tournamentController.updateTournament);
router.delete("/:id", tournamentController.deleteTournament);

module.exports = router;
