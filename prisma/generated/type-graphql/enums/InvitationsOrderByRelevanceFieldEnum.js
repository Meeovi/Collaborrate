"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InvitationsOrderByRelevanceFieldEnum;
(function (InvitationsOrderByRelevanceFieldEnum) {
    InvitationsOrderByRelevanceFieldEnum["email"] = "email";
    InvitationsOrderByRelevanceFieldEnum["billingAddress"] = "billingAddress";
    InvitationsOrderByRelevanceFieldEnum["shippingAddress"] = "shippingAddress";
    InvitationsOrderByRelevanceFieldEnum["orderNumber"] = "orderNumber";
    InvitationsOrderByRelevanceFieldEnum["grandTotalPurchased"] = "grandTotalPurchased";
    InvitationsOrderByRelevanceFieldEnum["paymentMethod"] = "paymentMethod";
    InvitationsOrderByRelevanceFieldEnum["status"] = "status";
    InvitationsOrderByRelevanceFieldEnum["media"] = "media";
    InvitationsOrderByRelevanceFieldEnum["content"] = "content";
})(InvitationsOrderByRelevanceFieldEnum = exports.InvitationsOrderByRelevanceFieldEnum || (exports.InvitationsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(InvitationsOrderByRelevanceFieldEnum, {
    name: "InvitationsOrderByRelevanceFieldEnum",
    description: undefined,
});
