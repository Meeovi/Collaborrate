"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CasesOrderByRelevanceFieldEnum;
(function (CasesOrderByRelevanceFieldEnum) {
    CasesOrderByRelevanceFieldEnum["state"] = "state";
    CasesOrderByRelevanceFieldEnum["type"] = "type";
    CasesOrderByRelevanceFieldEnum["subject"] = "subject";
    CasesOrderByRelevanceFieldEnum["description"] = "description";
    CasesOrderByRelevanceFieldEnum["resolution"] = "resolution";
    CasesOrderByRelevanceFieldEnum["priority"] = "priority";
    CasesOrderByRelevanceFieldEnum["status"] = "status";
    CasesOrderByRelevanceFieldEnum["account_name"] = "account_name";
    CasesOrderByRelevanceFieldEnum["assigned_to"] = "assigned_to";
})(CasesOrderByRelevanceFieldEnum = exports.CasesOrderByRelevanceFieldEnum || (exports.CasesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(CasesOrderByRelevanceFieldEnum, {
    name: "CasesOrderByRelevanceFieldEnum",
    description: undefined,
});
