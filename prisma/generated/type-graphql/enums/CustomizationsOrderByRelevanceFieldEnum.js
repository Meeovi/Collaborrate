"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CustomizationsOrderByRelevanceFieldEnum;
(function (CustomizationsOrderByRelevanceFieldEnum) {
    CustomizationsOrderByRelevanceFieldEnum["site_name"] = "site_name";
    CustomizationsOrderByRelevanceFieldEnum["nav_link"] = "nav_link";
    CustomizationsOrderByRelevanceFieldEnum["notification"] = "notification";
    CustomizationsOrderByRelevanceFieldEnum["banner"] = "banner";
    CustomizationsOrderByRelevanceFieldEnum["footer_link"] = "footer_link";
    CustomizationsOrderByRelevanceFieldEnum["announcement"] = "announcement";
    CustomizationsOrderByRelevanceFieldEnum["email"] = "email";
    CustomizationsOrderByRelevanceFieldEnum["site_url"] = "site_url";
    CustomizationsOrderByRelevanceFieldEnum["allow_signup"] = "allow_signup";
})(CustomizationsOrderByRelevanceFieldEnum = exports.CustomizationsOrderByRelevanceFieldEnum || (exports.CustomizationsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(CustomizationsOrderByRelevanceFieldEnum, {
    name: "CustomizationsOrderByRelevanceFieldEnum",
    description: undefined,
});
