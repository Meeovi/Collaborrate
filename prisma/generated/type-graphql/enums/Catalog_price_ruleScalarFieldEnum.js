"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Catalog_price_ruleScalarFieldEnum;
(function (Catalog_price_ruleScalarFieldEnum) {
    Catalog_price_ruleScalarFieldEnum["id"] = "id";
    Catalog_price_ruleScalarFieldEnum["rule"] = "rule";
    Catalog_price_ruleScalarFieldEnum["description"] = "description";
    Catalog_price_ruleScalarFieldEnum["active"] = "active";
    Catalog_price_ruleScalarFieldEnum["customer_groups"] = "customer_groups";
    Catalog_price_ruleScalarFieldEnum["priority"] = "priority";
    Catalog_price_ruleScalarFieldEnum["start_date"] = "start_date";
    Catalog_price_ruleScalarFieldEnum["end_date"] = "end_date";
    Catalog_price_ruleScalarFieldEnum["status"] = "status";
    Catalog_price_ruleScalarFieldEnum["website"] = "website";
    Catalog_price_ruleScalarFieldEnum["actions_apply"] = "actions_apply";
    Catalog_price_ruleScalarFieldEnum["actions_discount_amount"] = "actions_discount_amount";
    Catalog_price_ruleScalarFieldEnum["actions_discard_subsequent_rules"] = "actions_discard_subsequent_rules";
})(Catalog_price_ruleScalarFieldEnum = exports.Catalog_price_ruleScalarFieldEnum || (exports.Catalog_price_ruleScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Catalog_price_ruleScalarFieldEnum, {
    name: "Catalog_price_ruleScalarFieldEnum",
    description: undefined,
});
