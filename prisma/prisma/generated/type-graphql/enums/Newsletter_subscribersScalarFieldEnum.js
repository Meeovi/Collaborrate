"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Newsletter_subscribersScalarFieldEnum;
(function (Newsletter_subscribersScalarFieldEnum) {
    Newsletter_subscribersScalarFieldEnum["id"] = "id";
    Newsletter_subscribersScalarFieldEnum["email"] = "email";
    Newsletter_subscribersScalarFieldEnum["customer_first_name"] = "customer_first_name";
    Newsletter_subscribersScalarFieldEnum["customer_last_name"] = "customer_last_name";
    Newsletter_subscribersScalarFieldEnum["store"] = "store";
    Newsletter_subscribersScalarFieldEnum["status"] = "status";
    Newsletter_subscribersScalarFieldEnum["websites"] = "websites";
    Newsletter_subscribersScalarFieldEnum["created_at"] = "created_at";
    Newsletter_subscribersScalarFieldEnum["cust_id"] = "cust_id";
})(Newsletter_subscribersScalarFieldEnum = exports.Newsletter_subscribersScalarFieldEnum || (exports.Newsletter_subscribersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Newsletter_subscribersScalarFieldEnum, {
    name: "Newsletter_subscribersScalarFieldEnum",
    description: undefined,
});
