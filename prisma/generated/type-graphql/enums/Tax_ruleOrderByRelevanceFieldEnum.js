"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Tax_ruleOrderByRelevanceFieldEnum;
(function (Tax_ruleOrderByRelevanceFieldEnum) {
    Tax_ruleOrderByRelevanceFieldEnum["name"] = "name";
    Tax_ruleOrderByRelevanceFieldEnum["tax_rate"] = "tax_rate";
    Tax_ruleOrderByRelevanceFieldEnum["products"] = "products";
})(Tax_ruleOrderByRelevanceFieldEnum = exports.Tax_ruleOrderByRelevanceFieldEnum || (exports.Tax_ruleOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(Tax_ruleOrderByRelevanceFieldEnum, {
    name: "Tax_ruleOrderByRelevanceFieldEnum",
    description: undefined,
});
