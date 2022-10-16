"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersAvgOrderByAggregateInput_1 = require("../inputs/OrdersAvgOrderByAggregateInput");
const OrdersCountOrderByAggregateInput_1 = require("../inputs/OrdersCountOrderByAggregateInput");
const OrdersMaxOrderByAggregateInput_1 = require("../inputs/OrdersMaxOrderByAggregateInput");
const OrdersMinOrderByAggregateInput_1 = require("../inputs/OrdersMinOrderByAggregateInput");
const OrdersSumOrderByAggregateInput_1 = require("../inputs/OrdersSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrdersOrderByWithAggregationInput = class OrdersOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrdersOrderByWithAggregationInput.prototype, "transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCountOrderByAggregateInput_1.OrdersCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCountOrderByAggregateInput_1.OrdersCountOrderByAggregateInput)
], OrdersOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersAvgOrderByAggregateInput_1.OrdersAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersAvgOrderByAggregateInput_1.OrdersAvgOrderByAggregateInput)
], OrdersOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersMaxOrderByAggregateInput_1.OrdersMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersMaxOrderByAggregateInput_1.OrdersMaxOrderByAggregateInput)
], OrdersOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersMinOrderByAggregateInput_1.OrdersMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersMinOrderByAggregateInput_1.OrdersMinOrderByAggregateInput)
], OrdersOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersSumOrderByAggregateInput_1.OrdersSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersSumOrderByAggregateInput_1.OrdersSumOrderByAggregateInput)
], OrdersOrderByWithAggregationInput.prototype, "_sum", void 0);
OrdersOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersOrderByWithAggregationInput", {
        isAbstract: true
    })
], OrdersOrderByWithAggregationInput);
exports.OrdersOrderByWithAggregationInput = OrdersOrderByWithAggregationInput;
