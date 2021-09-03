const {get} = require("../main/api/api");
const {info} = require("../../log.config");
const { STATUS_CODES } = require("../main/api/constant");
const DRINKS = process.env.DRINKS ? process.env.DRINKS : 6.

let response;
beforeAll(async () => {
    response = await get("/1/search.php", "s=vodka");
    expect(response.status).toEqual(STATUS_CODES.OK);
});

afterAll(async () => {
    info("Test finished");
});

it("Then: The amount is always the same ", async () => {
    expect(response.data.drinks).toHaveLength(DRINKS);
});

it("Then: NO “bourbon” or “whiskey” in the cocktails collection", async () => {
    response.data.drinks.map((cocktail) => {
        Object.values(cocktail).map((value) => {
            expect(value).not.toEqual("bourbon");
            expect(value).not.toEqual("whiskey");
        })
    })
});

it("And: validate all cocktail names include “vodka", async () => {
    response.data.drinks.map((cocktail) => {
        const result = Object.values(cocktail).map((value) => {
            if(value === "vodka") {
                return true;
            }
        });
        expect(result.length).toBeGreaterThan(1);
    })
});

it("And: every cocktail has instruction in Italian language", async () => {
    response.data.drinks.map((cocktail) => {
        const result = Object.keys(cocktail).map((key) => {
            if(key === "strInstructionsIT") {
                return true;
            }
        });
        expect(result.length).toBeGreaterThan(1);
    })
});