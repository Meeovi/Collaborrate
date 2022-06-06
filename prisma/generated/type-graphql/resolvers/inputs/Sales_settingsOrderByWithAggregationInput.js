"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_settingsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsAvgOrderByAggregateInput_1 = require("../inputs/Sales_settingsAvgOrderByAggregateInput");
const Sales_settingsCountOrderByAggregateInput_1 = require("../inputs/Sales_settingsCountOrderByAggregateInput");
const Sales_settingsMaxOrderByAggregateInput_1 = require("../inputs/Sales_settingsMaxOrderByAggregateInput");
const Sales_settingsMinOrderByAggregateInput_1 = require("../inputs/Sales_settingsMinOrderByAggregateInput");
const Sales_settingsSumOrderByAggregateInput_1 = require("../inputs/Sales_settingsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Sales_settingsOrderByWithAggregationInput = class Sales_settingsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "sales_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "hide_customer_ip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "checkout_subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "checkout_discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "checkout_shipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "checkout_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "checkout_fixed_product_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "checkout_grand_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "checkout_gift_cards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "checkout_store_credit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "allow_reorder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "allow_zero_grandtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "invoice_logo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "invoice_html_print", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsOrderByWithAggregationInput.prototype, "invoice_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsCountOrderByAggregateInput_1.Sales_settingsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsCountOrderByAggregateInput_1.Sales_settingsCountOrderByAggregateInput)
], Sales_settingsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsAvgOrderByAggregateInput_1.Sales_settingsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsAvgOrderByAggregateInput_1.Sales_settingsAvgOrderByAggregateInput)
], Sales_settingsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsMaxOrderByAggregateInput_1.Sales_settingsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsMaxOrderByAggregateInput_1.Sales_settingsMaxOrderByAggregateInput)
], Sales_settingsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsMinOrderByAggregateInput_1.Sales_settingsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsMinOrderByAggregateInput_1.Sales_settingsMinOrderByAggregateInput)
], Sales_settingsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsSumOrderByAggregateInput_1.Sales_settingsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsSumOrderByAggregateInput_1.Sales_settingsSumOrderByAggregateInput)
], Sales_settingsOrderByWithAggregationInput.prototype, "_sum", void 0);
Sales_settingsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Sales_settingsOrderByWithAggregationInput", {
        isAbstract: true
    })
], Sales_settingsOrderByWithAggregationInput);
exports.Sales_settingsOrderByWithAggregationInput = Sales_settingsOrderByWithAggregationInput;
