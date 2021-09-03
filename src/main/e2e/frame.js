const {error} = require("../../../log.config");
const fillTheFrameInput = async (page, selector, text) => {
    for (const frame of page.mainFrame().childFrames()) {
        try {
            await frame.waitForSelector(selector, {timeout: 100});
            await frame.type(selector, text, {delay: 100});
        } catch (err) {
            error(err);
        }
    }
}

module.exports = {
    fillTheFrameInput
}