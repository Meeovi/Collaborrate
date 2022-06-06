"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateWithoutCustomers_customersToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateNestedOneWithoutQuotesInput_1 = require("../inputs/OrdersCreateNestedOneWithoutQuotesInput");
const ProductsCreateNestedOneWithoutQuotesInput_1 = require("../inputs/ProductsCreateNestedOneWithoutQuotesInput");
let QuotesCreateWithoutCustomers_customersToquotesInput = class QuotesCreateWithoutCustomers_customersToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "grand_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "valid_until", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "quote_stage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "invoice_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "payment_terms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "approval_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "approval_issues", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "contact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "billing_street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "billing_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "billing_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "billing_postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "billing_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "shipping_street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "shipping_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "shipping_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "shipping_postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "shipping_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "shipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "shipping_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "line_item_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "line_item_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "line_item_subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "line_item_discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "line_item_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "line_item_group_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedOneWithoutQuotesInput_1.OrdersCreateNestedOneWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedOneWithoutQuotesInput_1.OrdersCreateNestedOneWithoutQuotesInput)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutQuotesInput_1.ProductsCreateNestedOneWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutQuotesInput_1.ProductsCreateNestedOneWithoutQuotesInput)
], QuotesCreateWithoutCustomers_customersToquotesInput.prototype, "products_productsToquotes", void 0);
QuotesCreateWithoutCustomers_customersToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateWithoutCustomers_customersToquotesInput", {
        isAbstract: true
    })
], QuotesCreateWithoutCustomers_customersToquotesInput);
exports.QuotesCreateWithoutCustomers_customersToquotesInput = QuotesCreateWithoutCustomers_customersToquotesInput;
