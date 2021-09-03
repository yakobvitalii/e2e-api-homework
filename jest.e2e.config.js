const config = {
    "displayName":"e2e",
    "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
    ],
    "testMatch": [
        "<rootDir>/src/test/*.e2e.test.js",
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
    "testTimeout": 120000,
};

module.exports = config;
