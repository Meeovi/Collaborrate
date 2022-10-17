"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Tax_ruleScalarFieldEnum;
(function (Tax_ruleScalarFieldEnum) {
    Tax_ruleScalarFieldEnum["id"] = "id";
    Tax_ruleScalarFieldEnum["name"] = "name";
    Tax_ruleScalarFieldEnum["tax_rate"] = "tax_rate";
    Tax_ruleScalarFieldEnum["prod_id"] = "prod_id";
    Tax_ruleScalarFieldEnum["products"] = "products";
})(Tax_ruleScalarFieldEnum = exports.Tax_ruleScalarFieldEnum || (exports.Tax_ruleScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Tax_ruleScalarFieldEnum, {
    name: "Tax_ruleScalarFieldEnum",
    description: undefined,
});
