"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CustomizationsScalarFieldEnum;
(function (CustomizationsScalarFieldEnum) {
    CustomizationsScalarFieldEnum["id"] = "id";
    CustomizationsScalarFieldEnum["created_at"] = "created_at";
    CustomizationsScalarFieldEnum["site_name"] = "site_name";
    CustomizationsScalarFieldEnum["nav_link"] = "nav_link";
    CustomizationsScalarFieldEnum["notification"] = "notification";
    CustomizationsScalarFieldEnum["banner"] = "banner";
    CustomizationsScalarFieldEnum["footer_link"] = "footer_link";
    CustomizationsScalarFieldEnum["announcement"] = "announcement";
    CustomizationsScalarFieldEnum["email"] = "email";
    CustomizationsScalarFieldEnum["site_url"] = "site_url";
    CustomizationsScalarFieldEnum["allow_signup"] = "allow_signup";
})(CustomizationsScalarFieldEnum = exports.CustomizationsScalarFieldEnum || (exports.CustomizationsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CustomizationsScalarFieldEnum, {
    name: "CustomizationsScalarFieldEnum",
    description: undefined,
});
