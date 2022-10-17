"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OrdersOrderByRelevanceFieldEnum;
(function (OrdersOrderByRelevanceFieldEnum) {
    OrdersOrderByRelevanceFieldEnum["bill_to_name"] = "bill_to_name";
    OrdersOrderByRelevanceFieldEnum["ship_to_name"] = "ship_to_name";
    OrdersOrderByRelevanceFieldEnum["allocated_sources"] = "allocated_sources";
    OrdersOrderByRelevanceFieldEnum["braintree_transaction_source"] = "braintree_transaction_source";
    OrdersOrderByRelevanceFieldEnum["customers"] = "customers";
    OrdersOrderByRelevanceFieldEnum["products"] = "products";
    OrdersOrderByRelevanceFieldEnum["quotes"] = "quotes";
    OrdersOrderByRelevanceFieldEnum["transactions"] = "transactions";
})(OrdersOrderByRelevanceFieldEnum = exports.OrdersOrderByRelevanceFieldEnum || (exports.OrdersOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(OrdersOrderByRelevanceFieldEnum, {
    name: "OrdersOrderByRelevanceFieldEnum",
    description: undefined,
});
