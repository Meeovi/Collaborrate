"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesAvgOrderByAggregateInput_1 = require("../inputs/QuotesAvgOrderByAggregateInput");
const QuotesCountOrderByAggregateInput_1 = require("../inputs/QuotesCountOrderByAggregateInput");
const QuotesMaxOrderByAggregateInput_1 = require("../inputs/QuotesMaxOrderByAggregateInput");
const QuotesMinOrderByAggregateInput_1 = require("../inputs/QuotesMinOrderByAggregateInput");
const QuotesSumOrderByAggregateInput_1 = require("../inputs/QuotesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let QuotesOrderByWithAggregationInput = class QuotesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "grand_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "valid_until", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "quote_stage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "order_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "approval_issues", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "approval_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "billing_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "billing_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "billing_postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "billing_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "billing_street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "contact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "invoice_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "line_item_discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "line_item_group_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "line_item_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "line_item_subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "line_item_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "line_item_total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "payment_terms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "shipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "shipping_city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "shipping_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "shipping_postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "shipping_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "shipping_street", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "shipping_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "total", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "customers_customersToquotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesOrderByWithAggregationInput.prototype, "products_productsToquotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCountOrderByAggregateInput_1.QuotesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCountOrderByAggregateInput_1.QuotesCountOrderByAggregateInput)
], QuotesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesAvgOrderByAggregateInput_1.QuotesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesAvgOrderByAggregateInput_1.QuotesAvgOrderByAggregateInput)
], QuotesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesMaxOrderByAggregateInput_1.QuotesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesMaxOrderByAggregateInput_1.QuotesMaxOrderByAggregateInput)
], QuotesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesMinOrderByAggregateInput_1.QuotesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesMinOrderByAggregateInput_1.QuotesMinOrderByAggregateInput)
], QuotesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesSumOrderByAggregateInput_1.QuotesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesSumOrderByAggregateInput_1.QuotesSumOrderByAggregateInput)
], QuotesOrderByWithAggregationInput.prototype, "_sum", void 0);
QuotesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesOrderByWithAggregationInput", {
        isAbstract: true
    })
], QuotesOrderByWithAggregationInput);
exports.QuotesOrderByWithAggregationInput = QuotesOrderByWithAggregationInput;
