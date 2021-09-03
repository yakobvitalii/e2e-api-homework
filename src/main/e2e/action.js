const {info} =  require("../../../log.config");
const {waitToSelector} = require("./wait");

const click = async (page, selector) => {
   const element = await waitToSelector(page, selector);
   await element.click();
   info(`Click on the selector ${selector}`);
};

const enterText = async (page, selector, text) => {
    const element = await waitToSelector(page, selector);
    await element.type(text, {delay: 100}).then(() => info(`Type the text ${text} into the element ${selector}`));
};


const getText = async (page, selector) => {
    return await page.$eval(selector, 
        text => text.textContent);
};

const isDisplay = async (page, selector) => {
    try {
        await waitToSelector(page, selector);
        return true;
    } catch (e) {
        return false;
    }

}

module.exports = {
    click,
    enterText,
    getText,
    isDisplay
};
