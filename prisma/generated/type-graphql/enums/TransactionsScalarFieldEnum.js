"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TransactionsScalarFieldEnum;
(function (TransactionsScalarFieldEnum) {
    TransactionsScalarFieldEnum["id"] = "id";
    TransactionsScalarFieldEnum["order_id"] = "order_id";
    TransactionsScalarFieldEnum["transaction_id"] = "transaction_id";
    TransactionsScalarFieldEnum["parent_transaction_id"] = "parent_transaction_id";
    TransactionsScalarFieldEnum["created"] = "created";
    TransactionsScalarFieldEnum["payment_method"] = "payment_method";
    TransactionsScalarFieldEnum["closed"] = "closed";
    TransactionsScalarFieldEnum["customer_payment"] = "customer_payment";
    TransactionsScalarFieldEnum["orders"] = "orders";
})(TransactionsScalarFieldEnum = exports.TransactionsScalarFieldEnum || (exports.TransactionsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TransactionsScalarFieldEnum, {
    name: "TransactionsScalarFieldEnum",
    description: undefined,
});
