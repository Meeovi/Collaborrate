"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesOrderByRelevanceInput_1 = require("../inputs/InvoicesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InvoicesOrderByWithRelationAndSearchRelevanceInput = class InvoicesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "invoice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "invoice_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "billing_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "shipping_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "payment_method", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "shipping_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "shipping_and_handling", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesOrderByRelevanceInput_1.InvoicesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesOrderByRelevanceInput_1.InvoicesOrderByRelevanceInput)
], InvoicesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
InvoicesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InvoicesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], InvoicesOrderByWithRelationAndSearchRelevanceInput);
exports.InvoicesOrderByWithRelationAndSearchRelevanceInput = InvoicesOrderByWithRelationAndSearchRelevanceInput;
