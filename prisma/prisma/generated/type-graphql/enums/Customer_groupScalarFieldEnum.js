"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Customer_groupScalarFieldEnum;
(function (Customer_groupScalarFieldEnum) {
    Customer_groupScalarFieldEnum["id"] = "id";
    Customer_groupScalarFieldEnum["created_at"] = "created_at";
    Customer_groupScalarFieldEnum["name"] = "name";
    Customer_groupScalarFieldEnum["tax_class"] = "tax_class";
    Customer_groupScalarFieldEnum["cust_id"] = "cust_id";
})(Customer_groupScalarFieldEnum = exports.Customer_groupScalarFieldEnum || (exports.Customer_groupScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Customer_groupScalarFieldEnum, {
    name: "Customer_groupScalarFieldEnum",
    description: undefined,
});
