"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReturnsOrderByRelevanceFieldEnum;
(function (ReturnsOrderByRelevanceFieldEnum) {
    ReturnsOrderByRelevanceFieldEnum["name"] = "name";
    ReturnsOrderByRelevanceFieldEnum["validity"] = "validity";
    ReturnsOrderByRelevanceFieldEnum["return_prefix"] = "return_prefix";
    ReturnsOrderByRelevanceFieldEnum["customers"] = "customers";
    ReturnsOrderByRelevanceFieldEnum["products"] = "products";
    ReturnsOrderByRelevanceFieldEnum["type"] = "type";
    ReturnsOrderByRelevanceFieldEnum["description"] = "description";
    ReturnsOrderByRelevanceFieldEnum["shippingNumber"] = "shippingNumber";
    ReturnsOrderByRelevanceFieldEnum["shippingDescription"] = "shippingDescription";
    ReturnsOrderByRelevanceFieldEnum["status"] = "status";
    ReturnsOrderByRelevanceFieldEnum["liquidationReason"] = "liquidationReason";
    ReturnsOrderByRelevanceFieldEnum["media"] = "media";
    ReturnsOrderByRelevanceFieldEnum["weight"] = "weight";
    ReturnsOrderByRelevanceFieldEnum["height"] = "height";
    ReturnsOrderByRelevanceFieldEnum["howShipped"] = "howShipped";
    ReturnsOrderByRelevanceFieldEnum["location"] = "location";
    ReturnsOrderByRelevanceFieldEnum["shipTo"] = "shipTo";
    ReturnsOrderByRelevanceFieldEnum["case_id"] = "case_id";
})(ReturnsOrderByRelevanceFieldEnum = exports.ReturnsOrderByRelevanceFieldEnum || (exports.ReturnsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ReturnsOrderByRelevanceFieldEnum, {
    name: "ReturnsOrderByRelevanceFieldEnum",
    description: undefined,
});
