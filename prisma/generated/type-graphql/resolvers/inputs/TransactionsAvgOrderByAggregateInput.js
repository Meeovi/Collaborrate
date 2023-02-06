"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TransactionsAvgOrderByAggregateInput = class TransactionsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsAvgOrderByAggregateInput.prototype, "order_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsAvgOrderByAggregateInput.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsAvgOrderByAggregateInput.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsAvgOrderByAggregateInput.prototype, "payment_method", void 0);
TransactionsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TransactionsAvgOrderByAggregateInput);
exports.TransactionsAvgOrderByAggregateInput = TransactionsAvgOrderByAggregateInput;
