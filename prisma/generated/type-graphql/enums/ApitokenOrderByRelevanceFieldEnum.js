"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ApitokenOrderByRelevanceFieldEnum;
(function (ApitokenOrderByRelevanceFieldEnum) {
    ApitokenOrderByRelevanceFieldEnum["name"] = "name";
    ApitokenOrderByRelevanceFieldEnum["token_type"] = "token_type";
    ApitokenOrderByRelevanceFieldEnum["description"] = "description";
})(ApitokenOrderByRelevanceFieldEnum = exports.ApitokenOrderByRelevanceFieldEnum || (exports.ApitokenOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ApitokenOrderByRelevanceFieldEnum, {
    name: "ApitokenOrderByRelevanceFieldEnum",
    description: undefined,
});
