const {info} = require("../../../log.config");
const {chromium, webkit, firefox} = require("playwright");
let browser;

const getBrowser = async (name, isHeadless) => {
    const LAUNCH_OPTIONS = {
        headless: isHeadless,
        args: [
            "--no-sandbox",
            "--start-fullscreen",
            "--disable-gpu",
        ]
    };

    if (name.toUpperCase() === "FIREFOX") {
         browser = await firefox.launch(LAUNCH_OPTIONS);
         info("Test start on the Firefox");
    } else if(name.toUpperCase() === "SAFARI") {
        browser = await webkit.launch(LAUNCH_OPTIONS);
        info("Test start on the Safari");
    } else {
        browser = await chromium.launch(LAUNCH_OPTIONS);
        info("Test start on the Chrome");
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({width: 1680, height: 1240});
    return page;
};

const tearDownBrowser = async (page) => {
        page && await page.close().then(() => info("Page closed"));
        browser && await browser.close().then(() => info("Browser closed"));
};

module.exports = {
    getBrowser,
    tearDownBrowser,
}