"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Credit_memosAvgAggregate_1 = require("../outputs/Credit_memosAvgAggregate");
const Credit_memosCountAggregate_1 = require("../outputs/Credit_memosCountAggregate");
const Credit_memosMaxAggregate_1 = require("../outputs/Credit_memosMaxAggregate");
const Credit_memosMinAggregate_1 = require("../outputs/Credit_memosMinAggregate");
const Credit_memosSumAggregate_1 = require("../outputs/Credit_memosSumAggregate");
let Credit_memosGroupBy = class Credit_memosGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosGroupBy.prototype, "credit_memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosGroupBy.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Credit_memosGroupBy.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosGroupBy.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosGroupBy.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosGroupBy.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Credit_memosGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Credit_memosGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCountAggregate_1.Credit_memosCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCountAggregate_1.Credit_memosCountAggregate)
], Credit_memosGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosAvgAggregate_1.Credit_memosAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosAvgAggregate_1.Credit_memosAvgAggregate)
], Credit_memosGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosSumAggregate_1.Credit_memosSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosSumAggregate_1.Credit_memosSumAggregate)
], Credit_memosGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosMinAggregate_1.Credit_memosMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosMinAggregate_1.Credit_memosMinAggregate)
], Credit_memosGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosMaxAggregate_1.Credit_memosMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosMaxAggregate_1.Credit_memosMaxAggregate)
], Credit_memosGroupBy.prototype, "_max", void 0);
Credit_memosGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Credit_memosGroupBy", {
        isAbstract: true
    })
], Credit_memosGroupBy);
exports.Credit_memosGroupBy = Credit_memosGroupBy;
