"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_settingsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Sales_settingsScalarFieldEnum;
(function (Sales_settingsScalarFieldEnum) {
    Sales_settingsScalarFieldEnum["id"] = "id";
    Sales_settingsScalarFieldEnum["created_at"] = "created_at";
    Sales_settingsScalarFieldEnum["sales_email"] = "sales_email";
    Sales_settingsScalarFieldEnum["hide_customer_ip"] = "hide_customer_ip";
    Sales_settingsScalarFieldEnum["checkout_subtotal"] = "checkout_subtotal";
    Sales_settingsScalarFieldEnum["checkout_discount"] = "checkout_discount";
    Sales_settingsScalarFieldEnum["checkout_shipping"] = "checkout_shipping";
    Sales_settingsScalarFieldEnum["checkout_tax"] = "checkout_tax";
    Sales_settingsScalarFieldEnum["checkout_fixed_product_tax"] = "checkout_fixed_product_tax";
    Sales_settingsScalarFieldEnum["checkout_grand_total"] = "checkout_grand_total";
    Sales_settingsScalarFieldEnum["checkout_gift_cards"] = "checkout_gift_cards";
    Sales_settingsScalarFieldEnum["checkout_store_credit"] = "checkout_store_credit";
    Sales_settingsScalarFieldEnum["allow_reorder"] = "allow_reorder";
    Sales_settingsScalarFieldEnum["allow_zero_grandtotal"] = "allow_zero_grandtotal";
    Sales_settingsScalarFieldEnum["invoice_logo"] = "invoice_logo";
    Sales_settingsScalarFieldEnum["invoice_html_print"] = "invoice_html_print";
    Sales_settingsScalarFieldEnum["invoice_address"] = "invoice_address";
})(Sales_settingsScalarFieldEnum = exports.Sales_settingsScalarFieldEnum || (exports.Sales_settingsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Sales_settingsScalarFieldEnum, {
    name: "Sales_settingsScalarFieldEnum",
    description: undefined,
});
