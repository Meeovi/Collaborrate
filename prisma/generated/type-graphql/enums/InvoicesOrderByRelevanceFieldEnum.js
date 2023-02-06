"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InvoicesOrderByRelevanceFieldEnum;
(function (InvoicesOrderByRelevanceFieldEnum) {
    InvoicesOrderByRelevanceFieldEnum["bill_to_name"] = "bill_to_name";
    InvoicesOrderByRelevanceFieldEnum["billing_address"] = "billing_address";
    InvoicesOrderByRelevanceFieldEnum["grand_total_base"] = "grand_total_base";
    InvoicesOrderByRelevanceFieldEnum["grand_total_purchased"] = "grand_total_purchased";
    InvoicesOrderByRelevanceFieldEnum["status"] = "status";
    InvoicesOrderByRelevanceFieldEnum["shipping_address"] = "shipping_address";
    InvoicesOrderByRelevanceFieldEnum["customer_name"] = "customer_name";
    InvoicesOrderByRelevanceFieldEnum["email"] = "email";
    InvoicesOrderByRelevanceFieldEnum["customer_group"] = "customer_group";
    InvoicesOrderByRelevanceFieldEnum["payment_method"] = "payment_method";
    InvoicesOrderByRelevanceFieldEnum["shipping_information"] = "shipping_information";
    InvoicesOrderByRelevanceFieldEnum["subtotal"] = "subtotal";
    InvoicesOrderByRelevanceFieldEnum["shipping_and_handling"] = "shipping_and_handling";
})(InvoicesOrderByRelevanceFieldEnum = exports.InvoicesOrderByRelevanceFieldEnum || (exports.InvoicesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(InvoicesOrderByRelevanceFieldEnum, {
    name: "InvoicesOrderByRelevanceFieldEnum",
    description: undefined,
});
