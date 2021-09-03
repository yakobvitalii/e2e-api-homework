const faker = require('faker');
faker.setLocale("en_US");
const address = faker.address;

const CUSTOMER = {
    FULL_NAME: faker.name.findName(),
    EMAIL: faker.internet.email(),
    ADDRESS: address.streetAddress(),
    CITY: address.city(),
    STATE: "Indianapolis",
    ZIP_CODE: "46183",
    PHONE_NUMBER: faker.phone.phoneNumber("!##-!##-####"),
};

module.exports = {
    CUSTOMER,
}