const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());



app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/fizzbuzz/:number", (req, res) => {
    const number = req.params.number;
    const explorersInMission = ExplorerController.applyValidationInNumber(number);
    res.json(explorersInMission);
});



app.listen(port, () => {
    console.log("Escuchando por el puerto", port);
});