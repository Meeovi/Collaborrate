"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var GlossaryOrderByRelevanceFieldEnum;
(function (GlossaryOrderByRelevanceFieldEnum) {
    GlossaryOrderByRelevanceFieldEnum["name"] = "name";
    GlossaryOrderByRelevanceFieldEnum["content"] = "content";
    GlossaryOrderByRelevanceFieldEnum["image"] = "image";
})(GlossaryOrderByRelevanceFieldEnum = exports.GlossaryOrderByRelevanceFieldEnum || (exports.GlossaryOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(GlossaryOrderByRelevanceFieldEnum, {
    name: "GlossaryOrderByRelevanceFieldEnum",
    description: undefined,
});
