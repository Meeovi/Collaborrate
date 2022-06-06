"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Customer_paymentScalarFieldEnum;
(function (Customer_paymentScalarFieldEnum) {
    Customer_paymentScalarFieldEnum["id"] = "id";
    Customer_paymentScalarFieldEnum["created_at"] = "created_at";
    Customer_paymentScalarFieldEnum["cust_id"] = "cust_id";
    Customer_paymentScalarFieldEnum["payment_info"] = "payment_info";
    Customer_paymentScalarFieldEnum["provider"] = "provider";
    Customer_paymentScalarFieldEnum["account_no"] = "account_no";
    Customer_paymentScalarFieldEnum["expiry"] = "expiry";
})(Customer_paymentScalarFieldEnum = exports.Customer_paymentScalarFieldEnum || (exports.Customer_paymentScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Customer_paymentScalarFieldEnum, {
    name: "Customer_paymentScalarFieldEnum",
    description: undefined,
});
