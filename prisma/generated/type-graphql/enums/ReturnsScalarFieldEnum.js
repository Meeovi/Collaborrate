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
    ReturnsScalarFieldEnum["customers"] = "customers";
    ReturnsScalarFieldEnum["products"] = "products";
    ReturnsScalarFieldEnum["type"] = "type";
    ReturnsScalarFieldEnum["description"] = "description";
    ReturnsScalarFieldEnum["shippingNumber"] = "shippingNumber";
    ReturnsScalarFieldEnum["shippingDescription"] = "shippingDescription";
    ReturnsScalarFieldEnum["status"] = "status";
    ReturnsScalarFieldEnum["liquidationReason"] = "liquidationReason";
    ReturnsScalarFieldEnum["media"] = "media";
    ReturnsScalarFieldEnum["weight"] = "weight";
    ReturnsScalarFieldEnum["height"] = "height";
    ReturnsScalarFieldEnum["howShipped"] = "howShipped";
    ReturnsScalarFieldEnum["location"] = "location";
    ReturnsScalarFieldEnum["shipTo"] = "shipTo";
    ReturnsScalarFieldEnum["case_id"] = "case_id";
})(ReturnsScalarFieldEnum = exports.ReturnsScalarFieldEnum || (exports.ReturnsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReturnsScalarFieldEnum, {
    name: "ReturnsScalarFieldEnum",
    description: undefined,
});
