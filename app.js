const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
const ExplorerService = require('./lib/services/ExplorerService');
const FizzbuzzService = require('./lib/services/FizzbuzzService');


const explorersInNode = ExplorerService.filterByMission(explorers, "node");
const amount = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const name = ExplorerService.getExplorersUsernamesByMission(explorers, "node");



const explorer1 = { name: "Explorer1", score: 1 };
FizzbuzzService.applyValidationInExplorer(explorer1);

const explorer3 = { name: "Explorer3", score: 3 };
FizzbuzzService.applyValidationInExplorer(explorer3);

const explorer5 = { name: "Explorer5", score: 5 };
FizzbuzzService.applyValidationInExplorer(explorer5);

const explorer15 = { name: "Explorer15", score: 15 };
FizzbuzzService.applyValidationInExplorer(explorer15);
