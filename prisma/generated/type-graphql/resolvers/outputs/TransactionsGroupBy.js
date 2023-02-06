"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const TransactionsAvgAggregate_1 = require("../outputs/TransactionsAvgAggregate");
const TransactionsCountAggregate_1 = require("../outputs/TransactionsCountAggregate");
const TransactionsMaxAggregate_1 = require("../outputs/TransactionsMaxAggregate");
const TransactionsMinAggregate_1 = require("../outputs/TransactionsMinAggregate");
const TransactionsSumAggregate_1 = require("../outputs/TransactionsSumAggregate");
let TransactionsGroupBy = class TransactionsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsGroupBy.prototype, "order_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsGroupBy.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsGroupBy.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionsGroupBy.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], TransactionsGroupBy.prototype, "payment_method", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsGroupBy.prototype, "closed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsGroupBy.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsGroupBy.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCountAggregate_1.TransactionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCountAggregate_1.TransactionsCountAggregate)
], TransactionsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsAvgAggregate_1.TransactionsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsAvgAggregate_1.TransactionsAvgAggregate)
], TransactionsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsSumAggregate_1.TransactionsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsSumAggregate_1.TransactionsSumAggregate)
], TransactionsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsMinAggregate_1.TransactionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsMinAggregate_1.TransactionsMinAggregate)
], TransactionsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsMaxAggregate_1.TransactionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsMaxAggregate_1.TransactionsMaxAggregate)
], TransactionsGroupBy.prototype, "_max", void 0);
TransactionsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TransactionsGroupBy", {
        isAbstract: true
    })
], TransactionsGroupBy);
exports.TransactionsGroupBy = TransactionsGroupBy;
