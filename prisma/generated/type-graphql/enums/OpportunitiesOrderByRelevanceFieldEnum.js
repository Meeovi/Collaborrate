"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OpportunitiesOrderByRelevanceFieldEnum;
(function (OpportunitiesOrderByRelevanceFieldEnum) {
    OpportunitiesOrderByRelevanceFieldEnum["name"] = "name";
    OpportunitiesOrderByRelevanceFieldEnum["amount"] = "amount";
    OpportunitiesOrderByRelevanceFieldEnum["sales_stage"] = "sales_stage";
    OpportunitiesOrderByRelevanceFieldEnum["currency"] = "currency";
    OpportunitiesOrderByRelevanceFieldEnum["probability"] = "probability";
    OpportunitiesOrderByRelevanceFieldEnum["next_step"] = "next_step";
    OpportunitiesOrderByRelevanceFieldEnum["description"] = "description";
    OpportunitiesOrderByRelevanceFieldEnum["assigned_to"] = "assigned_to";
    OpportunitiesOrderByRelevanceFieldEnum["lead_source"] = "lead_source";
    OpportunitiesOrderByRelevanceFieldEnum["campaign"] = "campaign";
    OpportunitiesOrderByRelevanceFieldEnum["type"] = "type";
    OpportunitiesOrderByRelevanceFieldEnum["account_name"] = "account_name";
    OpportunitiesOrderByRelevanceFieldEnum["expected_close_date"] = "expected_close_date";
})(OpportunitiesOrderByRelevanceFieldEnum = exports.OpportunitiesOrderByRelevanceFieldEnum || (exports.OpportunitiesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(OpportunitiesOrderByRelevanceFieldEnum, {
    name: "OpportunitiesOrderByRelevanceFieldEnum",
    description: undefined,
});
