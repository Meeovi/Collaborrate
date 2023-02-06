"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TagsScalarFieldEnum;
(function (TagsScalarFieldEnum) {
    TagsScalarFieldEnum["id"] = "id";
    TagsScalarFieldEnum["name"] = "name";
    TagsScalarFieldEnum["excerpt"] = "excerpt";
    TagsScalarFieldEnum["categories"] = "categories";
    TagsScalarFieldEnum["articles"] = "articles";
    TagsScalarFieldEnum["products"] = "products";
    TagsScalarFieldEnum["customers"] = "customers";
    TagsScalarFieldEnum["users"] = "users";
})(TagsScalarFieldEnum = exports.TagsScalarFieldEnum || (exports.TagsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TagsScalarFieldEnum, {
    name: "TagsScalarFieldEnum",
    description: undefined,
});
