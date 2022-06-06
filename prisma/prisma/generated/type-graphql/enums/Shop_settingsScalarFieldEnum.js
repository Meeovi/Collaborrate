"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop_settingsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Shop_settingsScalarFieldEnum;
(function (Shop_settingsScalarFieldEnum) {
    Shop_settingsScalarFieldEnum["id"] = "id";
    Shop_settingsScalarFieldEnum["created_at"] = "created_at";
    Shop_settingsScalarFieldEnum["store_name"] = "store_name";
    Shop_settingsScalarFieldEnum["store_phone"] = "store_phone";
    Shop_settingsScalarFieldEnum["store_hours"] = "store_hours";
    Shop_settingsScalarFieldEnum["country"] = "country";
    Shop_settingsScalarFieldEnum["region"] = "region";
    Shop_settingsScalarFieldEnum["zipcode"] = "zipcode";
    Shop_settingsScalarFieldEnum["city"] = "city";
    Shop_settingsScalarFieldEnum["address"] = "address";
    Shop_settingsScalarFieldEnum["address_two"] = "address_two";
    Shop_settingsScalarFieldEnum["vat_number"] = "vat_number";
    Shop_settingsScalarFieldEnum["allow_state"] = "allow_state";
    Shop_settingsScalarFieldEnum["state_required_for"] = "state_required_for";
    Shop_settingsScalarFieldEnum["allow_countries"] = "allow_countries";
    Shop_settingsScalarFieldEnum["default_country"] = "default_country";
    Shop_settingsScalarFieldEnum["optional_zip"] = "optional_zip";
    Shop_settingsScalarFieldEnum["european_union_countries"] = "european_union_countries";
    Shop_settingsScalarFieldEnum["top_destinations"] = "top_destinations";
    Shop_settingsScalarFieldEnum["base_currency"] = "base_currency";
    Shop_settingsScalarFieldEnum["default_currency"] = "default_currency";
    Shop_settingsScalarFieldEnum["allowed_currency"] = "allowed_currency";
})(Shop_settingsScalarFieldEnum = exports.Shop_settingsScalarFieldEnum || (exports.Shop_settingsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Shop_settingsScalarFieldEnum, {
    name: "Shop_settingsScalarFieldEnum",
    description: undefined,
});
