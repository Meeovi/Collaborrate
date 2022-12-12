"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WebsitesScalarFieldEnum;
(function (WebsitesScalarFieldEnum) {
    WebsitesScalarFieldEnum["id"] = "id";
    WebsitesScalarFieldEnum["created_at"] = "created_at";
    WebsitesScalarFieldEnum["name"] = "name";
    WebsitesScalarFieldEnum["url"] = "url";
    WebsitesScalarFieldEnum["shop"] = "shop";
    WebsitesScalarFieldEnum["store"] = "store";
    WebsitesScalarFieldEnum["category"] = "category";
    WebsitesScalarFieldEnum["themes"] = "themes";
    WebsitesScalarFieldEnum["image"] = "image";
})(WebsitesScalarFieldEnum = exports.WebsitesScalarFieldEnum || (exports.WebsitesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(WebsitesScalarFieldEnum, {
    name: "WebsitesScalarFieldEnum",
    description: undefined,
});
