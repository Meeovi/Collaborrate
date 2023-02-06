"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsAvgOrderByAggregateInput_1 = require("../inputs/TransactionsAvgOrderByAggregateInput");
const TransactionsCountOrderByAggregateInput_1 = require("../inputs/TransactionsCountOrderByAggregateInput");
const TransactionsMaxOrderByAggregateInput_1 = require("../inputs/TransactionsMaxOrderByAggregateInput");
const TransactionsMinOrderByAggregateInput_1 = require("../inputs/TransactionsMinOrderByAggregateInput");
const TransactionsSumOrderByAggregateInput_1 = require("../inputs/TransactionsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TransactionsOrderByWithAggregationInput = class TransactionsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithAggregationInput.prototype, "order_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithAggregationInput.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithAggregationInput.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithAggregationInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithAggregationInput.prototype, "payment_method", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithAggregationInput.prototype, "closed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithAggregationInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithAggregationInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCountOrderByAggregateInput_1.TransactionsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCountOrderByAggregateInput_1.TransactionsCountOrderByAggregateInput)
], TransactionsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsAvgOrderByAggregateInput_1.TransactionsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsAvgOrderByAggregateInput_1.TransactionsAvgOrderByAggregateInput)
], TransactionsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsMaxOrderByAggregateInput_1.TransactionsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsMaxOrderByAggregateInput_1.TransactionsMaxOrderByAggregateInput)
], TransactionsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsMinOrderByAggregateInput_1.TransactionsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsMinOrderByAggregateInput_1.TransactionsMinOrderByAggregateInput)
], TransactionsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsSumOrderByAggregateInput_1.TransactionsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsSumOrderByAggregateInput_1.TransactionsSumOrderByAggregateInput)
], TransactionsOrderByWithAggregationInput.prototype, "_sum", void 0);
TransactionsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsOrderByWithAggregationInput", {
        isAbstract: true
    })
], TransactionsOrderByWithAggregationInput);
exports.TransactionsOrderByWithAggregationInput = TransactionsOrderByWithAggregationInput;
