"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WebsitesOrderByRelevanceFieldEnum;
(function (WebsitesOrderByRelevanceFieldEnum) {
    WebsitesOrderByRelevanceFieldEnum["name"] = "name";
    WebsitesOrderByRelevanceFieldEnum["url"] = "url";
    WebsitesOrderByRelevanceFieldEnum["shop"] = "shop";
    WebsitesOrderByRelevanceFieldEnum["store"] = "store";
    WebsitesOrderByRelevanceFieldEnum["category"] = "category";
    WebsitesOrderByRelevanceFieldEnum["themes"] = "themes";
    WebsitesOrderByRelevanceFieldEnum["image"] = "image";
})(WebsitesOrderByRelevanceFieldEnum = exports.WebsitesOrderByRelevanceFieldEnum || (exports.WebsitesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(WebsitesOrderByRelevanceFieldEnum, {
    name: "WebsitesOrderByRelevanceFieldEnum",
    description: undefined,
});
