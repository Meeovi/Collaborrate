"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateWithoutProducts_productsToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateNestedOneWithoutQuotesInput_1 = require("../inputs/CustomersCreateNestedOneWithoutQuotesInput");
const OrdersCreateNestedOneWithoutQuotesInput_1 = require("../inputs/OrdersCreateNestedOneWithoutQuotesInput");
let QuotesCreateWithoutProducts_productsToquotesInput = class QuotesCreateWithoutProducts_productsToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "grand_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "valid_until", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "quote_stage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "invoice_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "payment_terms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "approval_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "approval_issues", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "contact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "billing_street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "billing_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "billing_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "billing_postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "billing_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "shipping_street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "shipping_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "shipping_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "shipping_postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "shipping_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "shipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "shipping_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "line_item_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "line_item_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "line_item_subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "line_item_discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "line_item_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "line_item_group_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutQuotesInput_1.CustomersCreateNestedOneWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutQuotesInput_1.CustomersCreateNestedOneWithoutQuotesInput)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "customers_customersToquotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedOneWithoutQuotesInput_1.OrdersCreateNestedOneWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedOneWithoutQuotesInput_1.OrdersCreateNestedOneWithoutQuotesInput)
], QuotesCreateWithoutProducts_productsToquotesInput.prototype, "orders", void 0);
QuotesCreateWithoutProducts_productsToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateWithoutProducts_productsToquotesInput", {
        isAbstract: true
    })
], QuotesCreateWithoutProducts_productsToquotesInput);
exports.QuotesCreateWithoutProducts_productsToquotesInput = QuotesCreateWithoutProducts_productsToquotesInput;
