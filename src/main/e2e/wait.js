const {info} =  require("../../../log.config");

const wait = async (page, timeout) => {
    const milliseconds = 1000;
    await page.waitForTimeout(timeout * milliseconds);
    info(`Wait for the timeout ${timeout}`)
};

const waitToSelector = async (page, selector, timeout ) => {
    const element = await page.waitForSelector(selector, { timeout: timeout })
    info(`Wait for the selector ${selector} and return element`);
    return element;
};

module.exports = {
    wait,
    waitToSelector,
};
