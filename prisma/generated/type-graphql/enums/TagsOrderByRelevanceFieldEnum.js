"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TagsOrderByRelevanceFieldEnum;
(function (TagsOrderByRelevanceFieldEnum) {
    TagsOrderByRelevanceFieldEnum["name"] = "name";
    TagsOrderByRelevanceFieldEnum["excerpt"] = "excerpt";
    TagsOrderByRelevanceFieldEnum["categories"] = "categories";
    TagsOrderByRelevanceFieldEnum["articles"] = "articles";
    TagsOrderByRelevanceFieldEnum["products"] = "products";
    TagsOrderByRelevanceFieldEnum["customers"] = "customers";
    TagsOrderByRelevanceFieldEnum["users"] = "users";
})(TagsOrderByRelevanceFieldEnum = exports.TagsOrderByRelevanceFieldEnum || (exports.TagsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(TagsOrderByRelevanceFieldEnum, {
    name: "TagsOrderByRelevanceFieldEnum",
    description: undefined,
});
