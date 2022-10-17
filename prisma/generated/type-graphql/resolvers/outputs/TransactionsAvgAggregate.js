"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionsAvgAggregate = class TransactionsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsAvgAggregate.prototype, "order_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsAvgAggregate.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsAvgAggregate.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsAvgAggregate.prototype, "payment_method", void 0);
TransactionsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TransactionsAvgAggregate", {
        isAbstract: true
    })
], TransactionsAvgAggregate);
exports.TransactionsAvgAggregate = TransactionsAvgAggregate;
