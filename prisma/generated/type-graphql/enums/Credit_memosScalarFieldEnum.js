"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Credit_memosScalarFieldEnum;
(function (Credit_memosScalarFieldEnum) {
    Credit_memosScalarFieldEnum["credit_memo"] = "credit_memo";
    Credit_memosScalarFieldEnum["order_number"] = "order_number";
    Credit_memosScalarFieldEnum["created"] = "created";
    Credit_memosScalarFieldEnum["bill_to_name"] = "bill_to_name";
    Credit_memosScalarFieldEnum["status"] = "status";
    Credit_memosScalarFieldEnum["refunded"] = "refunded";
    Credit_memosScalarFieldEnum["action"] = "action";
    Credit_memosScalarFieldEnum["id"] = "id";
    Credit_memosScalarFieldEnum["cust_id"] = "cust_id";
    Credit_memosScalarFieldEnum["prod_id"] = "prod_id";
})(Credit_memosScalarFieldEnum = exports.Credit_memosScalarFieldEnum || (exports.Credit_memosScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Credit_memosScalarFieldEnum, {
    name: "Credit_memosScalarFieldEnum",
    description: undefined,
});
