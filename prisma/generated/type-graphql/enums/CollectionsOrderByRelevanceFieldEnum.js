"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CollectionsOrderByRelevanceFieldEnum;
(function (CollectionsOrderByRelevanceFieldEnum) {
    CollectionsOrderByRelevanceFieldEnum["name"] = "name";
    CollectionsOrderByRelevanceFieldEnum["description"] = "description";
    CollectionsOrderByRelevanceFieldEnum["image"] = "image";
    CollectionsOrderByRelevanceFieldEnum["product"] = "product";
    CollectionsOrderByRelevanceFieldEnum["meta_title"] = "meta_title";
    CollectionsOrderByRelevanceFieldEnum["meta_keywords"] = "meta_keywords";
    CollectionsOrderByRelevanceFieldEnum["meta_description"] = "meta_description";
})(CollectionsOrderByRelevanceFieldEnum = exports.CollectionsOrderByRelevanceFieldEnum || (exports.CollectionsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(CollectionsOrderByRelevanceFieldEnum, {
    name: "CollectionsOrderByRelevanceFieldEnum",
    description: undefined,
});
