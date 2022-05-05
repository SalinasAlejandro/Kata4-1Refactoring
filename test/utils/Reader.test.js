const Reader = require("./../../lib/utils/Reader");

describe("Test for Reader", () => {

    test("1. Obtain qty list of explorers", () => {
        const explorers = Reader.readJsonFile("test/explorers.test.json");
        expect(explorers.length).toBe(15);
    });

});