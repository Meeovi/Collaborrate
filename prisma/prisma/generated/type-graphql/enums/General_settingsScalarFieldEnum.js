"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var General_settingsScalarFieldEnum;
(function (General_settingsScalarFieldEnum) {
    General_settingsScalarFieldEnum["id"] = "id";
    General_settingsScalarFieldEnum["created_at"] = "created_at";
    General_settingsScalarFieldEnum["title"] = "title";
    General_settingsScalarFieldEnum["tagline"] = "tagline";
    General_settingsScalarFieldEnum["url"] = "url";
    General_settingsScalarFieldEnum["email"] = "email";
    General_settingsScalarFieldEnum["access_restrictions"] = "access_restrictions";
    General_settingsScalarFieldEnum["restriction_mode"] = "restriction_mode";
    General_settingsScalarFieldEnum["startup_page"] = "startup_page";
    General_settingsScalarFieldEnum["landing_page"] = "landing_page";
    General_settingsScalarFieldEnum["http_response"] = "http_response";
    General_settingsScalarFieldEnum["store_email"] = "store_email";
    General_settingsScalarFieldEnum["store_contact"] = "store_contact";
    General_settingsScalarFieldEnum["store_contact_two"] = "store_contact_two";
    General_settingsScalarFieldEnum["customer_support"] = "customer_support";
})(General_settingsScalarFieldEnum = exports.General_settingsScalarFieldEnum || (exports.General_settingsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(General_settingsScalarFieldEnum, {
    name: "General_settingsScalarFieldEnum",
    description: undefined,
});
