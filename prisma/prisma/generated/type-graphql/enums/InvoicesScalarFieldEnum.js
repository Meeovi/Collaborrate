"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InvoicesScalarFieldEnum;
(function (InvoicesScalarFieldEnum) {
    InvoicesScalarFieldEnum["invoice"] = "invoice";
    InvoicesScalarFieldEnum["order_number"] = "order_number";
    InvoicesScalarFieldEnum["invoice_date"] = "invoice_date";
    InvoicesScalarFieldEnum["bill_to_name"] = "bill_to_name";
    InvoicesScalarFieldEnum["billing_address"] = "billing_address";
    InvoicesScalarFieldEnum["grand_total_base"] = "grand_total_base";
    InvoicesScalarFieldEnum["grand_total_purchased"] = "grand_total_purchased";
    InvoicesScalarFieldEnum["status"] = "status";
    InvoicesScalarFieldEnum["shipping_address"] = "shipping_address";
    InvoicesScalarFieldEnum["customer_name"] = "customer_name";
    InvoicesScalarFieldEnum["email"] = "email";
    InvoicesScalarFieldEnum["customer_group"] = "customer_group";
    InvoicesScalarFieldEnum["payment_method"] = "payment_method";
    InvoicesScalarFieldEnum["shipping_information"] = "shipping_information";
    InvoicesScalarFieldEnum["subtotal"] = "subtotal";
    InvoicesScalarFieldEnum["shipping_and_handling"] = "shipping_and_handling";
    InvoicesScalarFieldEnum["id"] = "id";
})(InvoicesScalarFieldEnum = exports.InvoicesScalarFieldEnum || (exports.InvoicesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(InvoicesScalarFieldEnum, {
    name: "InvoicesScalarFieldEnum",
    description: undefined,
});
