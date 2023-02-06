"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CategoriesOrderByRelevanceFieldEnum;
(function (CategoriesOrderByRelevanceFieldEnum) {
    CategoriesOrderByRelevanceFieldEnum["thumbnail"] = "thumbnail";
    CategoriesOrderByRelevanceFieldEnum["name"] = "name";
    CategoriesOrderByRelevanceFieldEnum["visibility"] = "visibility";
    CategoriesOrderByRelevanceFieldEnum["websites"] = "websites";
    CategoriesOrderByRelevanceFieldEnum["product"] = "product";
    CategoriesOrderByRelevanceFieldEnum["country"] = "country";
    CategoriesOrderByRelevanceFieldEnum["description"] = "description";
    CategoriesOrderByRelevanceFieldEnum["content"] = "content";
    CategoriesOrderByRelevanceFieldEnum["image"] = "image";
    CategoriesOrderByRelevanceFieldEnum["meta_title"] = "meta_title";
    CategoriesOrderByRelevanceFieldEnum["meta_keywords"] = "meta_keywords";
    CategoriesOrderByRelevanceFieldEnum["meta_description"] = "meta_description";
    CategoriesOrderByRelevanceFieldEnum["meta_url"] = "meta_url";
    CategoriesOrderByRelevanceFieldEnum["workspaces"] = "workspaces";
})(CategoriesOrderByRelevanceFieldEnum = exports.CategoriesOrderByRelevanceFieldEnum || (exports.CategoriesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(CategoriesOrderByRelevanceFieldEnum, {
    name: "CategoriesOrderByRelevanceFieldEnum",
    description: undefined,
});
