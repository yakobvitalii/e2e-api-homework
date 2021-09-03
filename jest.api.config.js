const config = {
    "displayName":"integration",
    "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
    ],
    "testMatch": [
        "<rootDir>/src/test/*.api.test.js",
    ],
    "roots": [
        `<rootDir>/src/test/`
    ],
    "verbose": true,
    "transform": {
        "^.+\\.js?$": "babel-jest"
    },
    "reporters": [
        "default",
        "jest-allure",
    ],
    "setupFilesAfterEnv": [
        "jest-allure/dist/setup",
    ],
    "testRunner": "jest-jasmine2",
    "testTimeout": 20000,
};

module.exports = config;
