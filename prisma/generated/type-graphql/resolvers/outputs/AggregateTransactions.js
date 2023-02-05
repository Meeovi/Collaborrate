"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTransactions = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsAvgAggregate_1 = require("../outputs/TransactionsAvgAggregate");
const TransactionsCountAggregate_1 = require("../outputs/TransactionsCountAggregate");
const TransactionsMaxAggregate_1 = require("../outputs/TransactionsMaxAggregate");
const TransactionsMinAggregate_1 = require("../outputs/TransactionsMinAggregate");
const TransactionsSumAggregate_1 = require("../outputs/TransactionsSumAggregate");
let AggregateTransactions = class AggregateTransactions {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCountAggregate_1.TransactionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCountAggregate_1.TransactionsCountAggregate)
], AggregateTransactions.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsAvgAggregate_1.TransactionsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsAvgAggregate_1.TransactionsAvgAggregate)
], AggregateTransactions.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsSumAggregate_1.TransactionsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsSumAggregate_1.TransactionsSumAggregate)
], AggregateTransactions.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsMinAggregate_1.TransactionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsMinAggregate_1.TransactionsMinAggregate)
], AggregateTransactions.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsMaxAggregate_1.TransactionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsMaxAggregate_1.TransactionsMaxAggregate)
], AggregateTransactions.prototype, "_max", void 0);
AggregateTransactions = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTransactions", {
        isAbstract: true
    })
], AggregateTransactions);
exports.AggregateTransactions = AggregateTransactions;
