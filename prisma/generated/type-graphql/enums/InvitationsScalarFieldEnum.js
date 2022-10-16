"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InvitationsScalarFieldEnum;
(function (InvitationsScalarFieldEnum) {
    InvitationsScalarFieldEnum["id"] = "id";
    InvitationsScalarFieldEnum["created_at"] = "created_at";
    InvitationsScalarFieldEnum["invoiceDate"] = "invoiceDate";
    InvitationsScalarFieldEnum["email"] = "email";
    InvitationsScalarFieldEnum["billingAddress"] = "billingAddress";
    InvitationsScalarFieldEnum["shippingAddress"] = "shippingAddress";
    InvitationsScalarFieldEnum["orderNumber"] = "orderNumber";
    InvitationsScalarFieldEnum["grandTotalPurchased"] = "grandTotalPurchased";
    InvitationsScalarFieldEnum["paymentMethod"] = "paymentMethod";
    InvitationsScalarFieldEnum["status"] = "status";
    InvitationsScalarFieldEnum["media"] = "media";
    InvitationsScalarFieldEnum["content"] = "content";
})(InvitationsScalarFieldEnum = exports.InvitationsScalarFieldEnum || (exports.InvitationsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(InvitationsScalarFieldEnum, {
    name: "InvitationsScalarFieldEnum",
    description: undefined,
});
