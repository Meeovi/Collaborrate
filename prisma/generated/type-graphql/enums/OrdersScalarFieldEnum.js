"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OrdersScalarFieldEnum;
(function (OrdersScalarFieldEnum) {
    OrdersScalarFieldEnum["id"] = "id";
    OrdersScalarFieldEnum["purchase_point"] = "purchase_point";
    OrdersScalarFieldEnum["purchase_date"] = "purchase_date";
    OrdersScalarFieldEnum["bill_to_name"] = "bill_to_name";
    OrdersScalarFieldEnum["ship_to_name"] = "ship_to_name";
    OrdersScalarFieldEnum["grand_total_base"] = "grand_total_base";
    OrdersScalarFieldEnum["grand_total_purchased"] = "grand_total_purchased";
    OrdersScalarFieldEnum["status"] = "status";
    OrdersScalarFieldEnum["action"] = "action";
    OrdersScalarFieldEnum["allocated_sources"] = "allocated_sources";
    OrdersScalarFieldEnum["braintree_transaction_source"] = "braintree_transaction_source";
    OrdersScalarFieldEnum["cust_id"] = "cust_id";
    OrdersScalarFieldEnum["prod_id"] = "prod_id";
    OrdersScalarFieldEnum["customers"] = "customers";
    OrdersScalarFieldEnum["products"] = "products";
    OrdersScalarFieldEnum["quotes"] = "quotes";
    OrdersScalarFieldEnum["transactions"] = "transactions";
})(OrdersScalarFieldEnum = exports.OrdersScalarFieldEnum || (exports.OrdersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OrdersScalarFieldEnum, {
    name: "OrdersScalarFieldEnum",
    description: undefined,
});
