"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_settingsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Sales_settingsAvgAggregate_1 = require("../outputs/Sales_settingsAvgAggregate");
const Sales_settingsCountAggregate_1 = require("../outputs/Sales_settingsCountAggregate");
const Sales_settingsMaxAggregate_1 = require("../outputs/Sales_settingsMaxAggregate");
const Sales_settingsMinAggregate_1 = require("../outputs/Sales_settingsMinAggregate");
const Sales_settingsSumAggregate_1 = require("../outputs/Sales_settingsSumAggregate");
let Sales_settingsGroupBy = class Sales_settingsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Sales_settingsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Sales_settingsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "sales_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "hide_customer_ip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "checkout_subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "checkout_discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "checkout_shipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "checkout_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "checkout_fixed_product_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "checkout_grand_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "checkout_gift_cards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "checkout_store_credit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "allow_reorder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "allow_zero_grandtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "invoice_logo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "invoice_html_print", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsGroupBy.prototype, "invoice_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsCountAggregate_1.Sales_settingsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsCountAggregate_1.Sales_settingsCountAggregate)
], Sales_settingsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsAvgAggregate_1.Sales_settingsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsAvgAggregate_1.Sales_settingsAvgAggregate)
], Sales_settingsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsSumAggregate_1.Sales_settingsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsSumAggregate_1.Sales_settingsSumAggregate)
], Sales_settingsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsMinAggregate_1.Sales_settingsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsMinAggregate_1.Sales_settingsMinAggregate)
], Sales_settingsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsMaxAggregate_1.Sales_settingsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsMaxAggregate_1.Sales_settingsMaxAggregate)
], Sales_settingsGroupBy.prototype, "_max", void 0);
Sales_settingsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Sales_settingsGroupBy", {
        isAbstract: true
    })
], Sales_settingsGroupBy);
exports.Sales_settingsGroupBy = Sales_settingsGroupBy;
