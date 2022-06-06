"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReturnsScalarFieldEnum;
(function (ReturnsScalarFieldEnum) {
    ReturnsScalarFieldEnum["id"] = "id";
    ReturnsScalarFieldEnum["created_at"] = "created_at";
    ReturnsScalarFieldEnum["name"] = "name";
    ReturnsScalarFieldEnum["validity"] = "validity";
    ReturnsScalarFieldEnum["return_prefix"] = "return_prefix";
    ReturnsScalarFieldEnum["prod_id"] = "prod_id";
    ReturnsScalarFieldEnum["cust_id"] = "cust_id";
})(ReturnsScalarFieldEnum = exports.ReturnsScalarFieldEnum || (exports.ReturnsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReturnsScalarFieldEnum, {
    name: "ReturnsScalarFieldEnum",
    description: undefined,
});
