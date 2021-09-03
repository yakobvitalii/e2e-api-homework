const { BASE_URL } = require("../main/constant");
const { getBrowser, tearDownBrowser } = require("../main/e2e/browser");
const { CONTAINER_SALE_HERO_COMPONENT_SEL, 
    BUY_DETAILS_CONTAINER_COMPONENT_SEL, 
    PRODUCT_CONTAINER_INFO_COMPONENT_SEL,
    ORDER_SUMMARY_COMPONENT_SEL,
    PAYMENT_SUMMARY_COMPONENT_SEL,
} = require("../main/e2e/constant/selector/index");
const { click, enterText, isDisplay} = require("../main/e2e/action");
const { CUSTOMER } = require("../main/e2e/data/ShippingUserModel");
const { fillTheFrameInput } = require("../main/e2e/frame");
const browser = process.env.BROWSER ? process.env.BROWSER : "CHROME";

let page;
beforeAll(async () => {
    page = await getBrowser(browser);
});

afterAll(async () => {
    page = tearDownBrowser();
});

afterEach(async () => {
    const screen = await page.screenshot({fullPage: true});
    reporter.addAttachment("image", screen, "image/png");
})

it(`Given: user navigates to ${BASE_URL}`, async () => {
    await page.goto(BASE_URL);
})

it("When: user clicks on “shop mattress” button", async () => {
    await click(page, CONTAINER_SALE_HERO_COMPONENT_SEL.SHOP_MATTRESS_BUTTON);
});

it("And: user clicks on “Add to Cart” button", async () => {
    await click(page, PRODUCT_CONTAINER_INFO_COMPONENT_SEL.ADD_TO_CART);
});

it("And: user fills out the required fields on “shipping” step", async () => {
    await enterText(page, BUY_DETAILS_CONTAINER_COMPONENT_SEL.FULL_NAME, CUSTOMER.FULL_NAME);
    await enterText(page, BUY_DETAILS_CONTAINER_COMPONENT_SEL.EMAL, CUSTOMER.EMAIL);
    await enterText(page, BUY_DETAILS_CONTAINER_COMPONENT_SEL.ADDRESS, CUSTOMER.ADDRESS);
    await enterText(page, BUY_DETAILS_CONTAINER_COMPONENT_SEL.CITY, CUSTOMER.CITY);
    await enterText(page, BUY_DETAILS_CONTAINER_COMPONENT_SEL.STATE, CUSTOMER.STATE);
    await enterText(page, BUY_DETAILS_CONTAINER_COMPONENT_SEL.ZIP_CODE, CUSTOMER.ZIP_CODE);
    await enterText(page, BUY_DETAILS_CONTAINER_COMPONENT_SEL.PHONE_NUMBER, CUSTOMER.PHONE_NUMBER);
});

it("And: user click on “continue to billing” button ", async () => {
    await click(page, BUY_DETAILS_CONTAINER_COMPONENT_SEL.CONTINUE_TO_BILLING_BTN);
});

it("Then: user has been presented with the billing step and “review purchase” button exists", async () => {
    const review_purchase_result = await isDisplay(page, PAYMENT_SUMMARY_COMPONENT_SEL.REVIEW_PURCHASE_BTN);
    expect(review_purchase_result).toBeTruthy();
});

it("When: user fill incorrect cart number", async () => {
    await fillTheFrameInput(page, "input[name='cardnumber']", "4142324589909756");
    await fillTheFrameInput(page, "input[name='exp-date']", "22/12");
    await fillTheFrameInput(page, "input[name='cvc']", "22/12");
});

it("Then: user stay on the same page", async () => {
    const review_purchase_result = await isDisplay(page, PAYMENT_SUMMARY_COMPONENT_SEL.REVIEW_PURCHASE_BTN);
    expect(review_purchase_result).toBeTruthy();
});