"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReportsScalarFieldEnum;
(function (ReportsScalarFieldEnum) {
    ReportsScalarFieldEnum["id"] = "id";
    ReportsScalarFieldEnum["customer"] = "customer";
    ReportsScalarFieldEnum["email"] = "email";
    ReportsScalarFieldEnum["products"] = "products";
    ReportsScalarFieldEnum["quantity"] = "quantity";
    ReportsScalarFieldEnum["subtotal"] = "subtotal";
    ReportsScalarFieldEnum["applied_coupon"] = "applied_coupon";
    ReportsScalarFieldEnum["created"] = "created";
    ReportsScalarFieldEnum["updated"] = "updated";
    ReportsScalarFieldEnum["ip_address"] = "ip_address";
})(ReportsScalarFieldEnum = exports.ReportsScalarFieldEnum || (exports.ReportsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReportsScalarFieldEnum, {
    name: "ReportsScalarFieldEnum",
    description: undefined,
});
