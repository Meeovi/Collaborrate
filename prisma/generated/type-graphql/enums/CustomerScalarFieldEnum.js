"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CustomerScalarFieldEnum;
(function (CustomerScalarFieldEnum) {
    CustomerScalarFieldEnum["id"] = "id";
    CustomerScalarFieldEnum["created_at"] = "created_at";
    CustomerScalarFieldEnum["firstname"] = "firstname";
    CustomerScalarFieldEnum["lastname"] = "lastname";
    CustomerScalarFieldEnum["username"] = "username";
    CustomerScalarFieldEnum["email"] = "email";
    CustomerScalarFieldEnum["city"] = "city";
    CustomerScalarFieldEnum["state"] = "state";
    CustomerScalarFieldEnum["country"] = "country";
    CustomerScalarFieldEnum["postal"] = "postal";
    CustomerScalarFieldEnum["active"] = "active";
})(CustomerScalarFieldEnum = exports.CustomerScalarFieldEnum || (exports.CustomerScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CustomerScalarFieldEnum, {
    name: "CustomerScalarFieldEnum",
    description: undefined,
});
