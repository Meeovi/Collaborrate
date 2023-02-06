"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BrandsOrderByRelevanceFieldEnum;
(function (BrandsOrderByRelevanceFieldEnum) {
    BrandsOrderByRelevanceFieldEnum["code"] = "code";
    BrandsOrderByRelevanceFieldEnum["name"] = "name";
    BrandsOrderByRelevanceFieldEnum["country"] = "country";
    BrandsOrderByRelevanceFieldEnum["state"] = "state";
    BrandsOrderByRelevanceFieldEnum["isPublic"] = "isPublic";
    BrandsOrderByRelevanceFieldEnum["city"] = "city";
    BrandsOrderByRelevanceFieldEnum["description"] = "description";
    BrandsOrderByRelevanceFieldEnum["media"] = "media";
    BrandsOrderByRelevanceFieldEnum["mediamanager"] = "mediamanager";
    BrandsOrderByRelevanceFieldEnum["products"] = "products";
    BrandsOrderByRelevanceFieldEnum["workspaces"] = "workspaces";
})(BrandsOrderByRelevanceFieldEnum = exports.BrandsOrderByRelevanceFieldEnum || (exports.BrandsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(BrandsOrderByRelevanceFieldEnum, {
    name: "BrandsOrderByRelevanceFieldEnum",
    description: undefined,
});
