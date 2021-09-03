const CONTAINER_SALE_HERO_COMPONENT_SEL = {
    SHOP_MATTRESS_BUTTON: "[data-testid='shop_mattress_button']",
};

const PRODUCT_CONTAINER_INFO_COMPONENT_SEL = {
    ADD_TO_CART: "[data-testid='addtocart_btn']"
};

const BUY_DETAILS_CONTAINER_COMPONENT_SEL = {
    EMAL : "#email",
    FULL_NAME: "#shippingAddress_fullName",
    ADDRESS: "#shippingAddress_line1",
    CITY: "#shippingAddress_city",
    STATE: "#shippingAddress_state",
    ZIP_CODE: "#shippingAddress_zip",
    PHONE_NUMBER: "#shippingAddress_phone",
    CONTINUE_TO_BILLING_BTN: "#checkout_shipping_continue_btn",
};

const PAYMENT_SUMMARY_COMPONENT_SEL = {
    REVIEW_PURCHASE_BTN: "#checkout_payment_continue_btn",
}

module.exports = {
    CONTAINER_SALE_HERO_COMPONENT_SEL,
    PRODUCT_CONTAINER_INFO_COMPONENT_SEL,
    BUY_DETAILS_CONTAINER_COMPONENT_SEL,
    PAYMENT_SUMMARY_COMPONENT_SEL,
}
