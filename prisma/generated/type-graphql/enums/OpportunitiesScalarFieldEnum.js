"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OpportunitiesScalarFieldEnum;
(function (OpportunitiesScalarFieldEnum) {
    OpportunitiesScalarFieldEnum["id"] = "id";
    OpportunitiesScalarFieldEnum["created_at"] = "created_at";
    OpportunitiesScalarFieldEnum["name"] = "name";
    OpportunitiesScalarFieldEnum["amount"] = "amount";
    OpportunitiesScalarFieldEnum["sales_stage"] = "sales_stage";
    OpportunitiesScalarFieldEnum["currency"] = "currency";
    OpportunitiesScalarFieldEnum["probability"] = "probability";
    OpportunitiesScalarFieldEnum["next_step"] = "next_step";
    OpportunitiesScalarFieldEnum["description"] = "description";
    OpportunitiesScalarFieldEnum["assigned_to"] = "assigned_to";
    OpportunitiesScalarFieldEnum["lead_source"] = "lead_source";
    OpportunitiesScalarFieldEnum["campaign"] = "campaign";
    OpportunitiesScalarFieldEnum["type"] = "type";
    OpportunitiesScalarFieldEnum["account_name"] = "account_name";
    OpportunitiesScalarFieldEnum["expected_close_date"] = "expected_close_date";
})(OpportunitiesScalarFieldEnum = exports.OpportunitiesScalarFieldEnum || (exports.OpportunitiesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OpportunitiesScalarFieldEnum, {
    name: "OpportunitiesScalarFieldEnum",
    description: undefined,
});
