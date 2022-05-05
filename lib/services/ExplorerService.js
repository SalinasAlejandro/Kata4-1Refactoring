class ExplorerService {
    static filterByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInMission = this.filterByMission(explorers, mission);
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorerInMission = this.filterByMission(explorers, mission);
        return explorerInMission.map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService;