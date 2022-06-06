"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CasesScalarFieldEnum;
(function (CasesScalarFieldEnum) {
    CasesScalarFieldEnum["id"] = "id";
    CasesScalarFieldEnum["created_at"] = "created_at";
    CasesScalarFieldEnum["case_number"] = "case_number";
    CasesScalarFieldEnum["state"] = "state";
    CasesScalarFieldEnum["type"] = "type";
    CasesScalarFieldEnum["subject"] = "subject";
    CasesScalarFieldEnum["description"] = "description";
    CasesScalarFieldEnum["resolution"] = "resolution";
    CasesScalarFieldEnum["priority"] = "priority";
    CasesScalarFieldEnum["status"] = "status";
    CasesScalarFieldEnum["account_name"] = "account_name";
    CasesScalarFieldEnum["assigned_to"] = "assigned_to";
    CasesScalarFieldEnum["date_modified"] = "date_modified";
})(CasesScalarFieldEnum = exports.CasesScalarFieldEnum || (exports.CasesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CasesScalarFieldEnum, {
    name: "CasesScalarFieldEnum",
    description: undefined,
});
