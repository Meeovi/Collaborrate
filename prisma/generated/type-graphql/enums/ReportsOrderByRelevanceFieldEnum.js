"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReportsOrderByRelevanceFieldEnum;
(function (ReportsOrderByRelevanceFieldEnum) {
    ReportsOrderByRelevanceFieldEnum["customer"] = "customer";
    ReportsOrderByRelevanceFieldEnum["email"] = "email";
    ReportsOrderByRelevanceFieldEnum["products"] = "products";
    ReportsOrderByRelevanceFieldEnum["subtotal"] = "subtotal";
    ReportsOrderByRelevanceFieldEnum["applied_coupon"] = "applied_coupon";
    ReportsOrderByRelevanceFieldEnum["ip_address"] = "ip_address";
})(ReportsOrderByRelevanceFieldEnum = exports.ReportsOrderByRelevanceFieldEnum || (exports.ReportsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ReportsOrderByRelevanceFieldEnum, {
    name: "ReportsOrderByRelevanceFieldEnum",
    description: undefined,
});
