"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SettingsScalarFieldEnum;
(function (SettingsScalarFieldEnum) {
    SettingsScalarFieldEnum["id"] = "id";
    SettingsScalarFieldEnum["created_at"] = "created_at";
    SettingsScalarFieldEnum["store_name"] = "store_name";
    SettingsScalarFieldEnum["store_phone"] = "store_phone";
    SettingsScalarFieldEnum["store_hours"] = "store_hours";
    SettingsScalarFieldEnum["country"] = "country";
    SettingsScalarFieldEnum["region"] = "region";
    SettingsScalarFieldEnum["zipcode"] = "zipcode";
    SettingsScalarFieldEnum["city"] = "city";
    SettingsScalarFieldEnum["address"] = "address";
    SettingsScalarFieldEnum["address_two"] = "address_two";
    SettingsScalarFieldEnum["vat_number"] = "vat_number";
    SettingsScalarFieldEnum["allow_state"] = "allow_state";
    SettingsScalarFieldEnum["state_required_for"] = "state_required_for";
    SettingsScalarFieldEnum["allow_countries"] = "allow_countries";
    SettingsScalarFieldEnum["default_country"] = "default_country";
    SettingsScalarFieldEnum["optional_zip"] = "optional_zip";
    SettingsScalarFieldEnum["european_union_countries"] = "european_union_countries";
    SettingsScalarFieldEnum["top_destinations"] = "top_destinations";
    SettingsScalarFieldEnum["base_currency"] = "base_currency";
    SettingsScalarFieldEnum["default_currency"] = "default_currency";
    SettingsScalarFieldEnum["allowed_currency"] = "allowed_currency";
    SettingsScalarFieldEnum["siteName"] = "siteName";
    SettingsScalarFieldEnum["siteWebsite"] = "siteWebsite";
    SettingsScalarFieldEnum["sentryDsn"] = "sentryDsn";
    SettingsScalarFieldEnum["awsS3"] = "awsS3";
    SettingsScalarFieldEnum["databaseUrl"] = "databaseUrl";
    SettingsScalarFieldEnum["isPublic"] = "isPublic";
    SettingsScalarFieldEnum["type"] = "type";
    SettingsScalarFieldEnum["googleAnalytics"] = "googleAnalytics";
    SettingsScalarFieldEnum["searchSetting"] = "searchSetting";
    SettingsScalarFieldEnum["mailServer"] = "mailServer";
    SettingsScalarFieldEnum["siteTagline"] = "siteTagline";
})(SettingsScalarFieldEnum = exports.SettingsScalarFieldEnum || (exports.SettingsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SettingsScalarFieldEnum, {
    name: "SettingsScalarFieldEnum",
    description: undefined,
});
