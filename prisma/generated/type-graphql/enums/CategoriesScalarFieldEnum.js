"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CategoriesScalarFieldEnum;
(function (CategoriesScalarFieldEnum) {
    CategoriesScalarFieldEnum["id"] = "id";
    CategoriesScalarFieldEnum["thumbnail"] = "thumbnail";
    CategoriesScalarFieldEnum["name"] = "name";
    CategoriesScalarFieldEnum["visibility"] = "visibility";
    CategoriesScalarFieldEnum["status"] = "status";
    CategoriesScalarFieldEnum["websites"] = "websites";
    CategoriesScalarFieldEnum["product"] = "product";
    CategoriesScalarFieldEnum["country"] = "country";
    CategoriesScalarFieldEnum["description"] = "description";
    CategoriesScalarFieldEnum["content"] = "content";
    CategoriesScalarFieldEnum["image"] = "image";
    CategoriesScalarFieldEnum["meta_title"] = "meta_title";
    CategoriesScalarFieldEnum["meta_keywords"] = "meta_keywords";
    CategoriesScalarFieldEnum["meta_description"] = "meta_description";
    CategoriesScalarFieldEnum["meta_url"] = "meta_url";
    CategoriesScalarFieldEnum["workspaces"] = "workspaces";
})(CategoriesScalarFieldEnum = exports.CategoriesScalarFieldEnum || (exports.CategoriesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CategoriesScalarFieldEnum, {
    name: "CategoriesScalarFieldEnum",
    description: undefined,
});
