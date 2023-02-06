"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TransactionsOrderByRelevanceFieldEnum;
(function (TransactionsOrderByRelevanceFieldEnum) {
    TransactionsOrderByRelevanceFieldEnum["closed"] = "closed";
    TransactionsOrderByRelevanceFieldEnum["customer_payment"] = "customer_payment";
    TransactionsOrderByRelevanceFieldEnum["orders"] = "orders";
})(TransactionsOrderByRelevanceFieldEnum = exports.TransactionsOrderByRelevanceFieldEnum || (exports.TransactionsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(TransactionsOrderByRelevanceFieldEnum, {
    name: "TransactionsOrderByRelevanceFieldEnum",
    description: undefined,
});
