"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersOrderByWithRelationInput_1 = require("../inputs/CustomersOrderByWithRelationInput");
const ProductsOrderByWithRelationInput_1 = require("../inputs/ProductsOrderByWithRelationInput");
const QuotesOrderByRelationAggregateInput_1 = require("../inputs/QuotesOrderByRelationAggregateInput");
const TransactionsOrderByRelationAggregateInput_1 = require("../inputs/TransactionsOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrdersOrderByWithRelationInput = class OrdersOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithRelationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput)
], OrdersOrderByWithRelationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput)
], OrdersOrderByWithRelationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesOrderByRelationAggregateInput_1.QuotesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesOrderByRelationAggregateInput_1.QuotesOrderByRelationAggregateInput)
], OrdersOrderByWithRelationInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsOrderByRelationAggregateInput_1.TransactionsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsOrderByRelationAggregateInput_1.TransactionsOrderByRelationAggregateInput)
], OrdersOrderByWithRelationInput.prototype, "transactions", void 0);
OrdersOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersOrderByWithRelationInput", {
        isAbstract: true
    })
], OrdersOrderByWithRelationInput);
exports.OrdersOrderByWithRelationInput = OrdersOrderByWithRelationInput;
