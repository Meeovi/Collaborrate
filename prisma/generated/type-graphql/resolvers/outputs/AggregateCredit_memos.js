"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCredit_memos = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosAvgAggregate_1 = require("../outputs/Credit_memosAvgAggregate");
const Credit_memosCountAggregate_1 = require("../outputs/Credit_memosCountAggregate");
const Credit_memosMaxAggregate_1 = require("../outputs/Credit_memosMaxAggregate");
const Credit_memosMinAggregate_1 = require("../outputs/Credit_memosMinAggregate");
const Credit_memosSumAggregate_1 = require("../outputs/Credit_memosSumAggregate");
let AggregateCredit_memos = class AggregateCredit_memos {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCountAggregate_1.Credit_memosCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCountAggregate_1.Credit_memosCountAggregate)
], AggregateCredit_memos.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosAvgAggregate_1.Credit_memosAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosAvgAggregate_1.Credit_memosAvgAggregate)
], AggregateCredit_memos.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosSumAggregate_1.Credit_memosSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosSumAggregate_1.Credit_memosSumAggregate)
], AggregateCredit_memos.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosMinAggregate_1.Credit_memosMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosMinAggregate_1.Credit_memosMinAggregate)
], AggregateCredit_memos.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosMaxAggregate_1.Credit_memosMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosMaxAggregate_1.Credit_memosMaxAggregate)
], AggregateCredit_memos.prototype, "_max", void 0);
AggregateCredit_memos = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCredit_memos", {
        isAbstract: true
    })
], AggregateCredit_memos);
exports.AggregateCredit_memos = AggregateCredit_memos;
