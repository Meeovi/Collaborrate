"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CollectionsScalarFieldEnum;
(function (CollectionsScalarFieldEnum) {
    CollectionsScalarFieldEnum["id"] = "id";
    CollectionsScalarFieldEnum["created_at"] = "created_at";
    CollectionsScalarFieldEnum["name"] = "name";
    CollectionsScalarFieldEnum["description"] = "description";
    CollectionsScalarFieldEnum["image"] = "image";
    CollectionsScalarFieldEnum["product"] = "product";
    CollectionsScalarFieldEnum["meta_title"] = "meta_title";
    CollectionsScalarFieldEnum["meta_keywords"] = "meta_keywords";
    CollectionsScalarFieldEnum["meta_description"] = "meta_description";
})(CollectionsScalarFieldEnum = exports.CollectionsScalarFieldEnum || (exports.CollectionsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CollectionsScalarFieldEnum, {
    name: "CollectionsScalarFieldEnum",
    description: undefined,
});
