"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Credit_memosOrderByRelevanceFieldEnum;
(function (Credit_memosOrderByRelevanceFieldEnum) {
    Credit_memosOrderByRelevanceFieldEnum["credit_memo"] = "credit_memo";
    Credit_memosOrderByRelevanceFieldEnum["bill_to_name"] = "bill_to_name";
    Credit_memosOrderByRelevanceFieldEnum["status"] = "status";
    Credit_memosOrderByRelevanceFieldEnum["refunded"] = "refunded";
    Credit_memosOrderByRelevanceFieldEnum["action"] = "action";
    Credit_memosOrderByRelevanceFieldEnum["customers"] = "customers";
    Credit_memosOrderByRelevanceFieldEnum["products"] = "products";
})(Credit_memosOrderByRelevanceFieldEnum = exports.Credit_memosOrderByRelevanceFieldEnum || (exports.Credit_memosOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(Credit_memosOrderByRelevanceFieldEnum, {
    name: "Credit_memosOrderByRelevanceFieldEnum",
    description: undefined,
});
