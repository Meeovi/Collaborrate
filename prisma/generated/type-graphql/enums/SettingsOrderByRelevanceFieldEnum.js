"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SettingsOrderByRelevanceFieldEnum;
(function (SettingsOrderByRelevanceFieldEnum) {
    SettingsOrderByRelevanceFieldEnum["store_name"] = "store_name";
    SettingsOrderByRelevanceFieldEnum["store_phone"] = "store_phone";
    SettingsOrderByRelevanceFieldEnum["store_hours"] = "store_hours";
    SettingsOrderByRelevanceFieldEnum["country"] = "country";
    SettingsOrderByRelevanceFieldEnum["region"] = "region";
    SettingsOrderByRelevanceFieldEnum["zipcode"] = "zipcode";
    SettingsOrderByRelevanceFieldEnum["city"] = "city";
    SettingsOrderByRelevanceFieldEnum["address"] = "address";
    SettingsOrderByRelevanceFieldEnum["address_two"] = "address_two";
    SettingsOrderByRelevanceFieldEnum["vat_number"] = "vat_number";
    SettingsOrderByRelevanceFieldEnum["allow_state"] = "allow_state";
    SettingsOrderByRelevanceFieldEnum["state_required_for"] = "state_required_for";
    SettingsOrderByRelevanceFieldEnum["allow_countries"] = "allow_countries";
    SettingsOrderByRelevanceFieldEnum["default_country"] = "default_country";
    SettingsOrderByRelevanceFieldEnum["optional_zip"] = "optional_zip";
    SettingsOrderByRelevanceFieldEnum["european_union_countries"] = "european_union_countries";
    SettingsOrderByRelevanceFieldEnum["top_destinations"] = "top_destinations";
    SettingsOrderByRelevanceFieldEnum["base_currency"] = "base_currency";
    SettingsOrderByRelevanceFieldEnum["default_currency"] = "default_currency";
    SettingsOrderByRelevanceFieldEnum["allowed_currency"] = "allowed_currency";
    SettingsOrderByRelevanceFieldEnum["siteName"] = "siteName";
    SettingsOrderByRelevanceFieldEnum["siteWebsite"] = "siteWebsite";
    SettingsOrderByRelevanceFieldEnum["sentryDsn"] = "sentryDsn";
    SettingsOrderByRelevanceFieldEnum["awsS3"] = "awsS3";
    SettingsOrderByRelevanceFieldEnum["databaseUrl"] = "databaseUrl";
    SettingsOrderByRelevanceFieldEnum["isPublic"] = "isPublic";
    SettingsOrderByRelevanceFieldEnum["type"] = "type";
    SettingsOrderByRelevanceFieldEnum["googleAnalytics"] = "googleAnalytics";
    SettingsOrderByRelevanceFieldEnum["searchSetting"] = "searchSetting";
    SettingsOrderByRelevanceFieldEnum["mailServer"] = "mailServer";
    SettingsOrderByRelevanceFieldEnum["siteTagline"] = "siteTagline";
})(SettingsOrderByRelevanceFieldEnum = exports.SettingsOrderByRelevanceFieldEnum || (exports.SettingsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(SettingsOrderByRelevanceFieldEnum, {
    name: "SettingsOrderByRelevanceFieldEnum",
    description: undefined,
});
