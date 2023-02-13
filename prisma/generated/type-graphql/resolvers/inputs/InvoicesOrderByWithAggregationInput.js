"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesAvgOrderByAggregateInput_1 = require("../inputs/InvoicesAvgOrderByAggregateInput");
const InvoicesCountOrderByAggregateInput_1 = require("../inputs/InvoicesCountOrderByAggregateInput");
const InvoicesMaxOrderByAggregateInput_1 = require("../inputs/InvoicesMaxOrderByAggregateInput");
const InvoicesMinOrderByAggregateInput_1 = require("../inputs/InvoicesMinOrderByAggregateInput");
const InvoicesSumOrderByAggregateInput_1 = require("../inputs/InvoicesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InvoicesOrderByWithAggregationInput = class InvoicesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "invoice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "invoice_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "billing_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "shipping_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "payment_method", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "shipping_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "shipping_and_handling", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesCountOrderByAggregateInput_1.InvoicesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesCountOrderByAggregateInput_1.InvoicesCountOrderByAggregateInput)
], InvoicesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesAvgOrderByAggregateInput_1.InvoicesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesAvgOrderByAggregateInput_1.InvoicesAvgOrderByAggregateInput)
], InvoicesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesMaxOrderByAggregateInput_1.InvoicesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesMaxOrderByAggregateInput_1.InvoicesMaxOrderByAggregateInput)
], InvoicesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesMinOrderByAggregateInput_1.InvoicesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesMinOrderByAggregateInput_1.InvoicesMinOrderByAggregateInput)
], InvoicesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesSumOrderByAggregateInput_1.InvoicesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesSumOrderByAggregateInput_1.InvoicesSumOrderByAggregateInput)
], InvoicesOrderByWithAggregationInput.prototype, "_sum", void 0);
InvoicesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InvoicesOrderByWithAggregationInput", {
        isAbstract: true
    })
], InvoicesOrderByWithAggregationInput);
exports.InvoicesOrderByWithAggregationInput = InvoicesOrderByWithAggregationInput;
